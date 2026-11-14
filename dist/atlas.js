'use strict';

const svgNamespace = 'http://www.w3.org/2000/svg';
const filters = document.getElementById('filters');
const gallery = document.getElementById('gallery');
const search = document.getElementById('search');
const searchForm = document.getElementById('style-search');
const suggestions = document.getElementById('suggestions');
const results = document.getElementById('results');
const uiGallery = document.getElementById('ui-gallery');
const uiSearch = document.getElementById('ui-search');
const uiFilters = document.getElementById('ui-filters');
const uiPlatforms = document.getElementById('ui-platforms');
const dialog = document.getElementById('detail');
const detailArt = document.getElementById('detail-art');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const artworkObserver = new IntersectionObserver(entries => {
  for (const {target, isIntersecting} of entries) {
    if (!isIntersecting) continue;
    const image = target.querySelector('image');
    image.setAttribute('href', image.dataset.src);
    artworkObserver.unobserve(target);
  }
}, {rootMargin: '350px 0px'});

const chapterLabels = {
  original: 'Original 15',
  'print-history': 'Historical design',
  'graphic-culture': 'Poster culture',
  vector: 'Vector & drawing',
  'image-craft': 'Image craft',
  form: 'Form & 3D',
  layout: 'Branding & layout',
  marks: 'Marks & type',
  screen: 'Screen design',
  process: 'Print techniques',
  aesthetics: 'Digital & street',
  'fine-art': 'Fine art'
};

const aliases = {
  'Art Nouveau': 'Jugendstil whiplash Belle Époque',
  'Art Deco': 'style moderne',
  'New Wave typography': 'Swiss Punk Wolfgang Weingart',
  'Flat illustration': 'flat vector solid fills 2D',
  'Geometric illustration': 'geometric vector',
  'Isometric illustration': 'isometric vector axonometric',
  'Monoline': 'monoline vector line art',
  'Gradient mesh': 'gradient mesh vector',
  'Technical cutaway': 'technical scientific illustration',
  'Exploded diagram': 'technical scientific illustration exploded view',
  'Cross-section': 'technical scientific botanical illustration',
  'Graphic minimalism': 'minimalist modernist',
  'Neo-brutalism': 'brutalist brutalism web',
  'Luxury editorial': 'quiet luxury',
  'Maximalism': 'maximalist eclectic',
  'Mascot illustration': 'cartoon comic character mascot logo mark',
  'Whimsical cartoon illustration': 'big-eyed googly eyes quirky character storybook cat flat color',
  'Ligne claire': 'clear line comics cartoon',
  'Risograph': 'riso spot ink misregistration tactile handmade',
  'Early web / lo-fi digital': 'retro digital retro tech browser',
  'Glass render': '3D sensory',
  'Clay render': '3D tactile handmade',
  'Cuban OSPAAAL poster': 'local locally grounded screen print',
  'South Asian bazaar graphics': 'local locally grounded typography textile trade label',
  'Trompe-l’œil': 'trompe l oeil optical illusion'
};

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

function normalized(value) {
  return value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function expandIcon() {
  const icon = document.createElementNS(svgNamespace, 'svg');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(svgNamespace, 'path');
  path.setAttribute('d', 'M7 17 17 7M7 7h10v10');
  icon.append(path);
  return icon;
}

let index = 0;
for (const chapter of [...catalog, ...uiCatalog]) {
  for (const entry of chapter.entries) {
    entry.chapter = chapter;
    entry.index = ++index;
    entry.searchText = normalized([entry.name, entry.description, chapter.name, entry.keywords, aliases[entry.name]].join(' '));
  }
}
const platformLabels = {web: 'Web', app: 'App', both: 'Web + app'};
let visibleEntries = [];
let visibleUiEntries = [];
let uiPlatform = 'all';
let openedFrom;
let detailEntries = [];
let activePosition = 0;

function artwork(entry, className, accessible) {
  const [x, y, width, height] = entry.rect;
  const container = element('span', className);
  container.style.setProperty('--image-ratio', width / height);
  if (accessible) {
    container.setAttribute('role', 'img');
    container.setAttribute('aria-label', 'Illustrated study of ' + entry.name);
  } else {
    container.setAttribute('aria-hidden', 'true');
  }
  const svg = document.createElementNS(svgNamespace, 'svg');
  svg.setAttribute('viewBox', [x, y, width, height].join(' '));
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const image = document.createElementNS(svgNamespace, 'image');
  const src = 'art/' + (entry.artwork || entry.chapter.artwork || entry.chapter.id + '.jpg');
  if (accessible) image.setAttribute('href', src);
  else image.dataset.src = src;
  image.setAttribute('width', entry.artwork ? width : entry.chapter.width);
  image.setAttribute('height', entry.artwork ? height : entry.chapter.height);
  svg.append(image);
  container.append(svg);
  if (!accessible) artworkObserver.observe(container);
  return container;
}

const hero = document.getElementById('hero-art');
const switcher = document.getElementById('hero-switcher');
const entries = catalog.flatMap(chapter => chapter.entries);
const featured = ['Art Deco', 'Pop Art', 'Baroque', 'Gradient mesh']
  .map(name => entries.find(entry => entry.name === name));
let featuredEntry = featured[0];
const featureButton = element('button', 'hero-tile');
featureButton.type = 'button';
featureButton.setAttribute('aria-haspopup', 'dialog');
featureButton.addEventListener('click', () => openDetail(featuredEntry, featured, featureButton));
hero.append(featureButton);

function showFeatured(entry) {
  featuredEntry = entry;
  featureButton.setAttribute('aria-label', 'View featured study: ' + entry.name);
  const caption = element('span', 'hero-feature');
  caption.append(element('span', '', entry.name), expandIcon());
  featureButton.replaceChildren(artwork(entry, 'art', true), caption);
  for (const [index, button] of Array.from(switcher.children).entries()) {
    button.setAttribute('aria-pressed', String(featured[index] === entry));
  }
}

for (const entry of featured) {
  const button = element('button');
  button.type = 'button';
  button.setAttribute('aria-label', 'Show ' + entry.name);
  button.addEventListener('click', () => showFeatured(entry));
  switcher.append(button);
}
showFeatured(featuredEntry);

function addChapterOptions(select, chapters) {
  for (const chapter of chapters) {
    const option = element('option', '', chapterLabels[chapter.id] || chapter.name);
    option.value = chapter.id;
    select.append(option);
  }
}

addChapterOptions(filters, catalog);
addChapterOptions(uiFilters, uiCatalog);

function renderGallery({chapters, field, select, target, status, platform = 'all', resetFilters}) {
  for (const art of target.querySelectorAll('.card .art')) artworkObserver.unobserve(art);
  const phrase = normalized(field.value);
  const query = phrase.split(' ').filter(Boolean);
  const matchesInGallery = [];
  const fragment = document.createDocumentFragment();
  let chapterCount = 0;
  const total = chapters.reduce((count, chapter) => count + chapter.entries.length, 0);
  for (const chapter of chapters) {
    if (select.value !== 'all' && chapter.id !== select.value) continue;
    const matches = chapter.entries.filter(entry =>
      (platform === 'all' || entry.platform === platform || entry.platform === 'both') &&
      query.every(word => entry.searchText.includes(word))
    );
    if (matches.length === 0) continue;
    chapterCount++;
    matchesInGallery.push(...matches);

    const section = element('section', 'chapter');
    section.setAttribute('aria-labelledby', 'chapter-' + chapter.id);
    const header = element('header', 'chapter-heading');
    const title = element('h3', '', chapter.name);
    title.id = 'chapter-' + chapter.id;
    header.append(title, element('span', 'chapter-count', matches.length + (matches.length === 1 ? ' study' : ' studies')), element('p', '', chapter.description));

    const grid = element('ul', 'grid');
    for (const entry of matches) {
      const item = element('li');
      const card = element('button', 'card');
      card.type = 'button';
      card.dataset.index = entry.index;
      card.setAttribute('aria-haspopup', 'dialog');
      const caption = element('span', 'card-caption');
      const label = entry.platform
        ? element('span', 'card-platform', platformLabels[entry.platform])
        : element('span', 'card-number', String(entry.index).padStart(3, '0'));
      label.setAttribute('aria-hidden', 'true');
      caption.append(element('span', 'card-title', entry.name), label);
      const art = artwork(entry, 'art', false);
      const preview = element('span', 'card-preview');
      preview.append(element('span', '', 'View study'), expandIcon());
      art.append(preview);
      card.append(art, caption);
      item.append(card);
      grid.append(item);
    }
    section.append(header, grid);
    fragment.append(section);
  }

  const count = matchesInGallery.length;
  status.textContent = count === total
    ? total + ' studies across ' + chapterCount + (chapterCount === 1 ? ' chapter' : ' chapters')
    : count + ' of ' + total + ' studies';
  if (count === 0) {
    const empty = element('div', 'empty');
    const reset = element('button', 'reset-search', 'Clear search and filters');
    reset.type = 'button';
    reset.addEventListener('click', () => {
      field.value = '';
      select.value = 'all';
      resetFilters();
      field.focus();
    });
    empty.append(element('h3', '', 'No matching studies'), element('p', '', 'Try a shorter term or look across all chapters.'), reset);
    fragment.append(empty);
  }
  target.replaceChildren(fragment);
  return matchesInGallery;
}

function renderCollection() {
  const phrase = normalized(search.value);
  for (const button of suggestions.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(filters.value === 'all' && normalized(button.textContent) === phrase));
  }
  visibleEntries = renderGallery({chapters: catalog, field: search, select: filters, target: gallery, status: results, resetFilters: renderCollection});
}

function renderUiCollection() {
  for (const button of uiPlatforms.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button.value === uiPlatform));
  }
  visibleUiEntries = renderGallery({
    chapters: uiCatalog, field: uiSearch, select: uiFilters, target: uiGallery, status: document.getElementById('ui-results'),
    platform: uiPlatform, resetFilters() {
      uiPlatform = 'all';
      renderUiCollection();
    }
  });
}

filters.addEventListener('change', renderCollection);
suggestions.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  search.value = button.getAttribute('aria-pressed') === 'true' ? '' : button.textContent;
  filters.value = 'all';
  renderCollection();
});
search.addEventListener('input', renderCollection);
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  renderCollection();
  gallery.scrollIntoView({block: 'start'});
});
renderCollection();
uiFilters.addEventListener('change', renderUiCollection);
uiSearch.addEventListener('input', renderUiCollection);
uiPlatforms.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.value === uiPlatform) return;
  uiPlatform = button.value;
  renderUiCollection();
});
document.getElementById('ui-search-form').addEventListener('submit', event => {
  event.preventDefault();
  uiGallery.scrollIntoView({block: 'start'});
});
renderUiCollection();

function showDetail() {
  const entry = detailEntries[activePosition];
  document.getElementById('detail-index').textContent = entry.platform
    ? platformLabels[entry.platform] + ' · Interface concept'
    : 'Study ' + String(entry.index).padStart(3, '0');
  document.getElementById('detail-chapter').textContent = entry.chapter.name;
  document.getElementById('detail-title').textContent = entry.name;
  document.getElementById('detail-description').textContent = entry.description;
  const guidance = document.getElementById('detail-guidance');
  guidance.hidden = !entry.guidance;
  guidance.textContent = entry.guidance || '';
  const reference = document.getElementById('detail-reference');
  reference.hidden = !entry.reference;
  const referenceLink = reference.querySelector('a');
  if (entry.reference) {
    referenceLink.href = entry.reference.url;
    referenceLink.textContent = entry.reference.label;
  } else {
    referenceLink.removeAttribute('href');
    referenceLink.textContent = '';
  }
  document.getElementById('detail-position').textContent = (activePosition + 1) + ' / ' + detailEntries.length;
  detailArt.replaceChildren(artwork(entry, 'art', true));
  previous.disabled = detailEntries.length < 2;
  next.disabled = detailEntries.length < 2;
  dialog.scrollTop = 0;
}

function stepDetail(direction) {
  const length = detailEntries.length;
  if (length < 2) return;
  activePosition = (activePosition + direction + length) % length;
  showDetail();
}

function openDetail(entry, entries, trigger) {
  detailEntries = entries;
  activePosition = entries.indexOf(entry);
  openedFrom = trigger;
  showDetail();
  dialog.showModal();
}

function openGalleryCard(event, visible) {
  const card = event.target.closest('button[data-index]');
  if (!card) return;
  const entry = visible.find(entry => entry.index === Number(card.dataset.index));
  openDetail(entry, visible, card);
}

gallery.addEventListener('click', event => openGalleryCard(event, visibleEntries));
uiGallery.addEventListener('click', event => openGalleryCard(event, visibleUiEntries));
previous.addEventListener('click', () => stepDetail(-1));
next.addEventListener('click', () => stepDetail(1));
dialog.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  stepDetail(event.key === 'ArrowLeft' ? -1 : 1);
});
dialog.addEventListener('click', event => {
  if (event.target === dialog && event.clientY < dialog.getBoundingClientRect().top) dialog.close();
});
dialog.addEventListener('close', () => openedFrom?.focus({preventScroll: true}));
