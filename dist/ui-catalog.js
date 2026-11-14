const uiCatalog = [
  {
    "id": "ui-foundations",
    "name": "Interface foundations",
    "description": "From physical metaphors to simpler surfaces and clearer controls.",
    "artwork": "ui-foundations.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "Skeuomorphism",
        "description": "A shop designed like a familiar physical object, with wooden shelves, stitched leather, paper price tags, and embossed brass controls.",
        "platform": "app",
        "guidance": "Use a familiar physical metaphor to explain a control. Keep realistic decoration away from labels and essential actions.",
        "reference": {
          "label": "Nielsen Norman Group on skeuomorphism",
          "url": "https://www.nngroup.com/articles/skeuomorphism/"
        },
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Flat design",
        "description": "Solid color blocks and simple icons define the hierarchy. Strong button labels and contrast help users recognize actions.",
        "platform": "both",
        "keywords": "flat ui solid fills",
        "guidance": "Make click targets identifiable through button fills, borders, underlined links, and consistent placement.",
        "reference": {
          "label": "Nielsen Norman Group on flat design",
          "url": "https://www.nngroup.com/articles/flat-design/"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Flat 2.0",
        "description": "Mostly flat surfaces gain selective depth through borders, subtle shadows, or raised buttons that signal which controls are interactive.",
        "platform": "both",
        "keywords": "flat ui semi flat",
        "guidance": "Reserve elevation for meaningful differences such as a raised action, a menu, or a dialog.",
        "reference": {
          "label": "Nielsen Norman Group on Flat 2.0",
          "url": "https://www.nngroup.com/articles/flat-design/"
        },
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Minimalism",
        "description": "A limited palette, generous space, and a small set of controls give each element a clear purpose.",
        "platform": "both",
        "guidance": "Keep navigation and labels visible when users need them. Whitespace only helps when the next step is clear.",
        "reference": {
          "label": "Nielsen Norman Group’s study of minimalist websites",
          "url": "https://www.nngroup.com/articles/characteristics-minimalism/"
        },
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "Monochrome UI",
        "description": "A single hue or grayscale carries the whole screen. Weight, contrast, and spacing must distinguish states without relying on color.",
        "platform": "both",
        "keywords": "grayscale black and white",
        "guidance": "Pair tonal changes with text, icon shape, or borders so status still makes sense in grayscale.",
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Dark interface",
        "description": "Light content appears on dark surfaces. Visible borders and distinct surface levels help separate controls and content.",
        "platform": "both",
        "keywords": "dark mode oled",
        "guidance": "Check text, dividers, input boundaries, and focus indicators against each surface.",
        "reference": {
          "label": "Apple’s Dark Mode guidelines",
          "url": "https://developer.apple.com/design/human-interface-guidelines/dark-mode"
        },
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-materials",
    "name": "Materials and depth",
    "description": "How shadows, reflections, and texture communicate layers.",
    "artwork": "ui-materials.webp",
    "width": 1536,
    "height": 1024,
    "entries": [
      {
        "name": "Neumorphism",
        "description": "Paired highlights and shadows make controls seem recessed into or raised from one continuous surface. The subtle edges can make controls hard to see.",
        "platform": "both",
        "guidance": "Use visible borders and focus indicators when embossed shadows alone cannot distinguish interactive controls.",
        "reference": {
          "label": "Nielsen Norman Group on skeuomorphism and neumorphism",
          "url": "https://www.nngroup.com/articles/skeuomorphism/"
        },
        "rect": [
          4,
          4,
          504,
          504
        ]
      },
      {
        "name": "Glassmorphism",
        "description": "Frosted translucent panels blur what sits behind them. Background contrast changes as panels move over different content.",
        "platform": "both",
        "guidance": "Test contrast with the lightest and darkest content that may appear behind the panel.",
        "reference": {
          "label": "Nielsen Norman Group on glassmorphism",
          "url": "https://www.nngroup.com/articles/glassmorphism/"
        },
        "rect": [
          516,
          4,
          504,
          504
        ]
      },
      {
        "name": "Liquid Glass",
        "description": "Apple’s dynamic interface material uses lensing and refraction for controls layered above content. The study shows its appearance in a still frame.",
        "platform": "app",
        "keywords": "ios apple glass refraction",
        "guidance": "Use system controls where available and check behavior with increased contrast and reduced transparency.",
        "reference": {
          "label": "Apple’s Liquid Glass overview",
          "url": "https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass"
        },
        "rect": [
          1028,
          4,
          504,
          504
        ]
      },
      {
        "name": "Claymorphism",
        "description": "Rounded volumes, soft shadows, and matte color make buttons and cards look like molded clay.",
        "platform": "both",
        "guidance": "Keep shadows light enough that text remains readable and actions still look different from decorative objects.",
        "reference": {
          "label": "Loomwest’s claymorphism example",
          "url": "https://loomwest.com/styles.html"
        },
        "rect": [
          4,
          516,
          504,
          504
        ]
      },
      {
        "name": "Aurora and gradient mesh",
        "description": "Soft pools of color blend across the background. Stable foreground surfaces keep text and controls easy to read.",
        "platform": "both",
        "keywords": "aurora ui gradient background mesh",
        "guidance": "Keep text on surfaces with predictable contrast. Avoid placing small labels directly on a shifting gradient.",
        "rect": [
          516,
          516,
          504,
          504
        ]
      },
      {
        "name": "Dimensional layering",
        "description": "Stacked planes, controlled shadows, and occlusion create foreground and background while keeping the interface itself legible.",
        "platform": "both",
        "guidance": "Use depth to show hierarchy or interaction. Keep foreground content from hiding essential controls.",
        "rect": [
          1028,
          516,
          504,
          504
        ]
      }
    ]
  },
  {
    "id": "ui-composition",
    "name": "Layout and typography",
    "description": "How a screen is arranged and what the eye notices first.",
    "artwork": "ui-composition.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "Swiss grid",
        "description": "A strict grid, flush alignment, and restrained sans-serif typography make the page easy to scan.",
        "platform": "web",
        "guidance": "Keep the reading order logical when columns stack on a narrow screen.",
        "reference": {
          "label": "Swiss National Library on the International Typographic Style",
          "url": "https://www.nb.admin.ch/en/the-international-style-1950-1970"
        },
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Editorial grid",
        "description": "Varying column widths, large images, captions, and long-form typography borrow the reading rhythm of a magazine.",
        "platform": "web",
        "guidance": "Set a comfortable line length and keep captions with their images as the page reflows.",
        "reference": {
          "label": "Loomwest’s editorial design example",
          "url": "https://loomwest.com/styles.html"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Bento grid",
        "description": "Tiles of different sizes group related information and signal priority. The layout can reflow into a single column on narrow screens.",
        "platform": "both",
        "guidance": "Order tiles by importance and preserve that reading order when the grid reflows.",
        "reference": {
          "label": "Loomwest’s bento-grid example",
          "url": "https://loomwest.com/styles.html"
        },
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Bauhaus geometry",
        "description": "Circles, rectangles, and strong planes of color build a playful hierarchy that can stay functional with consistent labels and controls.",
        "platform": "both",
        "guidance": "Use shapes consistently so a decorative circle and an action control cannot be mistaken for each other.",
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "Block-based color",
        "description": "Large solid color regions separate page sections. Repeated labels and spacing help users navigate when the palette is bold.",
        "platform": "web",
        "guidance": "Repeat headings or labels across color regions so the structure remains clear without color.",
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Maximalism",
        "description": "Pattern, overlapping imagery, and oversized type bring density and energy. A clear main action gives the eye a place to land.",
        "platform": "web",
        "guidance": "Leave enough space around the main action to make it easy to find amid the pattern and imagery.",
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-expressive",
    "name": "Expressive web aesthetics",
    "description": "Graphic design traditions adapted to screens.",
    "artwork": "ui-expressive.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "Web brutalism",
        "description": "Exposed structure, default-looking links, blunt typography, and sparse decoration make the page feel deliberately raw.",
        "platform": "web",
        "guidance": "Keep links identifiable and give the page a predictable reading order.",
        "reference": {
          "label": "Brutalist Studio project case study",
          "url": "https://themainwebsite.com/projects/project-04"
        },
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Neo-brutalism",
        "description": "Thick outlines, bright fills, and hard offset shadows turn buttons and cards into assertive graphic objects.",
        "platform": "both",
        "keywords": "neobrutalism neubrutalism hard shadow",
        "guidance": "Use borders and shadows consistently to distinguish actions from decorative blocks.",
        "reference": {
          "label": "Nielsen Norman Group on neobrutalism",
          "url": "https://www.nngroup.com/articles/neobrutalism/"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Memphis-inspired UI",
        "description": "Squiggles, dots, and asymmetrical geometry add playful accents to simple screen structures.",
        "platform": "both",
        "guidance": "Place high-energy pattern around content areas where it will not compete with labels or icons.",
        "reference": {
          "label": "V&A on Memphis and Postmodernism",
          "url": "https://www.vam.ac.uk/articles/what-is-postmodernism/"
        },
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Hand-drawn UI",
        "description": "Irregular lettering, sketch marks, and illustrated icons add a handmade voice to otherwise familiar controls.",
        "platform": "both",
        "guidance": "Use readable type for functional text, including form labels and validation messages.",
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "Organic and biophilic UI",
        "description": "Natural palettes, irregular contours, and botanical imagery evoke the outdoors without crowding the interface.",
        "platform": "both",
        "guidance": "Use irregular shapes in illustration and framing. Keep hit areas predictable.",
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Oversized typography",
        "description": "A few large words carry most of the composition. Smaller navigation and utility controls still need a clear place.",
        "platform": "web",
        "guidance": "Test line breaks and keep navigation and actions visible at smaller widths.",
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-retro",
    "name": "Retro and speculative UI",
    "description": "Visual references from early software, games, and fictional interfaces.",
    "artwork": "ui-retro.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "Early web",
        "description": "Default blue links, compact navigation, badges, and table-like layouts reference the public web of the 1990s.",
        "platform": "web",
        "guidance": "Keep the recognizable directory cues while allowing text to wrap and controls to work on touch screens.",
        "reference": {
          "label": "The original World Wide Web project page",
          "url": "https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html"
        },
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Y2K UI",
        "description": "Chrome, translucent plastics, bubble lettering, and airy gradients recall turn-of-the-millennium cyber optimism.",
        "platform": "both",
        "guidance": "Leave metallic and translucent effects around controls so labels stay legible.",
        "reference": {
          "label": "Loomwest’s Y2K design example",
          "url": "https://loomwest.com/styles.html"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Frutiger Aero",
        "description": "Glossy controls, sky blue, grass green, water, and bubbles give the interface a bright mid-2000s feel.",
        "platform": "both",
        "guidance": "Check that glossy highlights leave enough contrast for labels and states.",
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Pixel UI",
        "description": "Grid-aligned sprites, stepped icons, and pixel typography bring retro game visuals into the interface.",
        "platform": "both",
        "keywords": "pixel art retro 8 bit 16 bit",
        "guidance": "Use a readable font for longer passages and make pixel-styled controls large enough to tap.",
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "Terminal UI",
        "description": "Monospaced text, prompt characters, and command-style navigation evoke a text terminal.",
        "platform": "both",
        "guidance": "Offer familiar controls alongside command entry when the audience may not know the syntax.",
        "reference": {
          "label": "Microsoft’s Windows Terminal overview",
          "url": "https://learn.microsoft.com/en-us/windows/terminal/"
        },
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Cyberpunk HUD",
        "description": "Neon readouts, scanning lines, and technical panels evoke a futuristic control display. The density makes strong grouping essential.",
        "platform": "both",
        "guidance": "Reserve neon for selected states or key data, and pair color changes with labels.",
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-current",
    "name": "Contemporary web and app aesthetics",
    "description": "Additional directions in product marketing, retail, and experimental interface design.",
    "artwork": "ui-current.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "Cinematic web design",
        "description": "Oversized photography and restrained chrome set a scene. A stable layer for controls keeps them readable over changing imagery.",
        "platform": "web",
        "guidance": "Keep navigation legible over the busiest frame and respect reduced-motion preferences.",
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Digital collage",
        "description": "Cutouts, clashing textures, and layered objects carry a scrapbook-like art direction through an interface.",
        "platform": "web",
        "guidance": "Use an orderly reading path and put text on clear surfaces.",
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Luxury editorial",
        "description": "A limited palette, refined typography, and carefully cropped photography bring an editorial approach to product browsing.",
        "platform": "web",
        "guidance": "Check that small secondary labels still have sufficient contrast and size.",
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Vibrant gradients",
        "description": "High-saturation colors blend across defined areas. Flat text surfaces and stable controls keep the interface readable.",
        "platform": "both",
        "guidance": "Check contrast across the full gradient and distinguish actions by shape or text.",
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "Muted pastel UI",
        "description": "Desaturated tints and softly rounded shapes give an interface a calm feel. Strong foreground colors maintain contrast.",
        "platform": "both",
        "guidance": "Use a darker foreground for essential text and active controls.",
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Chromatic aberration",
        "description": "Separated red, green, and blue channels evoke optical or digital interference. Stable text remains easier to read than distorted text.",
        "platform": "web",
        "guidance": "Keep distortion off text, focus outlines, and essential controls.",
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-experience",
    "name": "Screen experiences",
    "description": "Ways to organize information and guide attention through a task.",
    "artwork": "ui-experience.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "Data-dense dashboard",
        "description": "Compact tables, filters, and small charts support quick scanning and comparison in a workbench.",
        "platform": "web",
        "guidance": "Make units and status clear. Keep the key metric or alert easy to scan above the detailed table.",
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Card-based app",
        "description": "Repeated cards give items a consistent structure with room for summaries, images, and actions.",
        "platform": "both",
        "guidance": "Keep recurring content in the same order so users can compare cards quickly.",
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Scroll storytelling",
        "description": "An ordered sequence of images and short passages reveals information as the reader progresses. The study shows three stages.",
        "platform": "web",
        "keywords": "scrollytelling parallax",
        "guidance": "Keep the story understandable in reading order when scroll effects are turned off.",
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Motion-led UI",
        "description": "Changes in position, scale, and shape show where content came from and where it goes. The study shows three states of a transition.",
        "platform": "both",
        "guidance": "Provide a reduced-motion version that still communicates the same change in state.",
        "reference": {
          "label": "Nielsen Norman Group on motion in UX",
          "url": "https://www.nngroup.com/articles/animation-purpose-ux/"
        },
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "Chat-first UI",
        "description": "A conversational thread handles open-ended requests. Suggested prompts and visible response states help users understand what can happen next.",
        "platform": "both",
        "keywords": "ai native chatbot conversational ux",
        "guidance": "Give users a clear way to start, recover from errors, and find any controls they need for common tasks.",
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Spatial UI",
        "description": "Windows, depth, and distance organize information in a spatial scene. Readable panels and predictable controls help users stay oriented.",
        "platform": "app",
        "keywords": "visionos vr xr augmented reality",
        "guidance": "Keep controls within comfortable reach and text legible at the expected viewing distance.",
        "reference": {
          "label": "Apple’s guidelines for visionOS",
          "url": "https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos"
        },
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-specialist",
    "name": "Specialist and experimental looks",
    "description": "Visual approaches for reading, illustration, retail, and experience design.",
    "artwork": "ui-specialist.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "E-ink and paper UI",
        "description": "Quiet panels, crisp type, and a narrow grayscale palette evoke electronic paper and print reading.",
        "platform": "both",
        "keywords": "eink eink reader epaper",
        "guidance": "Use static, high-contrast states and keep motion secondary to reading.",
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "High-contrast UI",
        "description": "Distinct foregrounds, solid control boundaries, and visible focus states support legibility. High contrast can be applied to many visual styles.",
        "platform": "both",
        "guidance": "Check text contrast as well as the boundaries and focus indicators of controls.",
        "reference": {
          "label": "W3C guidance on text contrast",
          "url": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Kinetic typography",
        "description": "Letterforms shift in position, scale, or shape to convey an idea. The study shows three frames of an animated heading.",
        "platform": "web",
        "guidance": "Preserve the words in a readable position for people who turn off animation.",
        "reference": {
          "label": "Nielsen Norman Group on motion in UX",
          "url": "https://www.nngroup.com/articles/animation-purpose-ux/"
        },
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "3D product interface",
        "description": "An interactive model can reveal shape, material, or configuration. The study shows a product viewer with a 3D pear and rotation controls.",
        "platform": "both",
        "keywords": "webgl three dimensional product commerce",
        "guidance": "Give users named controls and offer images or descriptions for the same product details.",
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "Vaporwave UI",
        "description": "Pastel sunsets, obsolete windows, and classical imagery turn early digital conventions into a stylized interface.",
        "platform": "web",
        "guidance": "Use the retro window as a visual cue while keeping essential controls predictable.",
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Vintage analog UI",
        "description": "Archival typography, paper tones, and film grain evoke an earlier medium. A consistent control style can coexist with the texture.",
        "platform": "both",
        "guidance": "Keep film grain and archival texture off small type and important icons.",
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-platform",
    "name": "Platform design systems",
    "description": "Selected systems with documented components and behavior.",
    "artwork": "ui-platform.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "Material 3",
        "description": "Google’s Material Design uses role-based color, distinct component shapes, and clear interaction states. Material You can derive a palette from the user’s wallpaper.",
        "platform": "app",
        "keywords": "google material you android md3 dynamic color",
        "reference": {
          "label": "Google on the evolution of Material Design",
          "url": "https://design.google/library/material-design-eras"
        },
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Material 3 Expressive",
        "description": "A Material 3 direction that uses bolder shapes, vibrant color, typography, and motion to draw attention to important content.",
        "platform": "app",
        "keywords": "google android m3",
        "reference": {
          "label": "Google’s research on expressive design",
          "url": "https://design.google/library/expressive-material-design-google-research"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Apple Human Interface Guidelines",
        "description": "Apple’s platform conventions cover navigation, controls, type that responds to system settings, and layout behavior users recognize across its devices.",
        "platform": "app",
        "keywords": "apple hig ios macos",
        "reference": {
          "label": "Apple Human Interface Guidelines",
          "url": "https://developer.apple.com/design/human-interface-guidelines/"
        },
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Fluent 2",
        "description": "Microsoft’s design system defines tokens for color, type, geometry, and elevation across several platforms.",
        "platform": "both",
        "reference": {
          "label": "Microsoft Fluent 2 documentation",
          "url": "https://fluent2.microsoft.design/get-started/design"
        },
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "IBM Carbon",
        "description": "Carbon uses an underlying grid, IBM Plex typography, and a documented component library for product interfaces.",
        "platform": "web",
        "keywords": "enterprise",
        "reference": {
          "label": "Carbon’s grid documentation",
          "url": "https://www.carbondesignsystem.com/building-blocks/foundations/2x-grid/overview"
        },
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Adobe Spectrum",
        "description": "Spectrum provides components and platform guidance for tools, including compact controls and panels for demanding creative workflows.",
        "platform": "both",
        "reference": {
          "label": "Adobe Spectrum documentation",
          "url": "https://spectrum.adobe.com/"
        },
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-systems",
    "name": "Web product design systems",
    "description": "Selected systems for services, commerce, and complex products.",
    "artwork": "ui-systems.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "GOV.UK Design System",
        "description": "GOV.UK patterns emphasize readable type, prominent labels, clear errors, and predictable steps in public services.",
        "platform": "web",
        "reference": {
          "label": "GOV.UK Design System",
          "url": "https://design-system.service.gov.uk/"
        },
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "US Web Design System",
        "description": "USWDS provides accessible components and patterns for US federal digital services, including form, navigation, and alert conventions.",
        "platform": "web",
        "keywords": "uswds gov federal",
        "reference": {
          "label": "U.S. Web Design System",
          "url": "https://designsystem.digital.gov/"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Ant Design",
        "description": "Ant Design provides a large component suite for enterprise applications, including tables, forms, filtering, and navigation.",
        "platform": "web",
        "reference": {
          "label": "Ant Design documentation",
          "url": "https://ant.design/docs/spec/introduce/"
        },
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Shopify Polaris",
        "description": "Polaris supports merchant workflows with clear page hierarchy, contextual actions, and cohesive admin components.",
        "platform": "web",
        "reference": {
          "label": "Shopify’s guide to building admin apps",
          "url": "https://shopify.dev/docs/api/app-home/latest"
        },
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "GitHub Primer",
        "description": "Primer defines primitives and components for developer products, including compact action buttons and status indicators.",
        "platform": "web",
        "reference": {
          "label": "GitHub Primer documentation",
          "url": "https://primer.style/"
        },
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "Atlassian Design System",
        "description": "Atlassian’s system gives team collaboration products shared navigation, status, spacing, and interaction patterns.",
        "platform": "web",
        "reference": {
          "label": "Atlassian Design System",
          "url": "https://atlassian.design/"
        },
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  },
  {
    "id": "ui-tooling",
    "name": "More design systems",
    "description": "Additional examples of component libraries and historical platform languages.",
    "artwork": "ui-tooling.webp",
    "width": 1774,
    "height": 887,
    "entries": [
      {
        "name": "SAP Fiori",
        "description": "Fiori organizes enterprise work into role-based apps with consistent navigation, responsive layouts, and reusable controls.",
        "platform": "web",
        "reference": {
          "label": "SAP Design System documentation",
          "url": "https://www.sap.com/design-system/"
        },
        "rect": [
          4,
          4,
          583,
          436
        ]
      },
      {
        "name": "Salesforce Lightning",
        "description": "Lightning supports record-based workflows with compact layouts, toolbars, and component patterns for working across many objects.",
        "platform": "web",
        "keywords": "slds crm",
        "reference": {
          "label": "Salesforce Lightning Design System",
          "url": "https://www.lightningdesignsystem.com/"
        },
        "rect": [
          595,
          4,
          584,
          436
        ]
      },
      {
        "name": "Bootstrap",
        "description": "Bootstrap’s grid, utility classes, forms, and components provide a familiar starting point for responsive websites and web apps.",
        "platform": "web",
        "reference": {
          "label": "Bootstrap documentation",
          "url": "https://getbootstrap.com/docs/5.3/getting-started/introduction/"
        },
        "rect": [
          1187,
          4,
          583,
          436
        ]
      },
      {
        "name": "Windows Metro",
        "description": "Large type, bright tiles, and a flat, grid-driven layout define the historical Metro design language.",
        "platform": "app",
        "keywords": "live tiles microsoft",
        "reference": {
          "label": "Microsoft on the Windows Phone Start screen",
          "url": "https://blogs.windows.com/windowsexperience/2012/11/02/the-story-behind-the-windows-phone-8-start-screen/"
        },
        "rect": [
          4,
          448,
          583,
          435
        ]
      },
      {
        "name": "GNOME Human Interface Guidelines",
        "description": "GNOME’s guidelines describe patterns for desktop applications, including header bars, view switchers, and focused layouts.",
        "platform": "app",
        "reference": {
          "label": "GNOME Human Interface Guidelines",
          "url": "https://developer.gnome.org/hig/"
        },
        "rect": [
          595,
          448,
          584,
          435
        ]
      },
      {
        "name": "PatternFly",
        "description": "PatternFly offers reusable interface patterns for enterprise applications, including navigation, data lists, and complex forms.",
        "platform": "web",
        "reference": {
          "label": "PatternFly documentation",
          "url": "https://www.patternfly.org/"
        },
        "rect": [
          1187,
          448,
          583,
          435
        ]
      }
    ]
  }
];
