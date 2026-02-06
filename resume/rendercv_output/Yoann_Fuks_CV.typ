// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Yoann Fuks",
  footer: context { [#emph[Yoann Fuks -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Dernière mise à jour Jan 2026] ],
  locale-catalog-language: "fr",
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: false,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "XCharter",
  typography-font-family-name: "XCharter",
  typography-font-family-headline: "XCharter",
  typography-font-family-connections: "XCharter",
  typography-font-family-section-titles: "XCharter",
  typography-font-size-body: 10pt,
  typography-font-size-name: 25pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.2em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: false,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: true,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: true,
  header-connections-separator: "|",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.15cm,
  sections-space-between-regular-entries: 0.42cm,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.08cm,
  entries-highlights-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-nested-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 0.08cm,
  entries-highlights-space-between-items: 0.08cm,
  entries-highlights-space-between-bullet-and-text: 0.3em,
  date: datetime(
    year: 2026,
    month: 1,
    day: 12,
  ),
)


#grid(
  columns: (auto, 1fr),
  column-gutter: 0cm,
  align: horizon + left,
  [#pad(left: 0.4cm, right: 0.4cm, image("yoann.jpeg", width: 3.5cm))
],
  [
= Yoann Fuks

  #headline([Développeur Full Stack JS\/TS à la recherche d’un poste en CDI à Paris])

#connections(
  [Paris, France],
  [#link("mailto:yoannfuks@gmail.com", icon: false, if-underline: false, if-color: false)[yoannfuks\@gmail.com]],
  [#link("tel:+33-6-49-44-63-80", icon: false, if-underline: false, if-color: false)[06 49 44 63 80]],
  [#link("https://linkedin.com/in/yoann-fuks", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/yoann-fuks]],
  [#link("https://github.com/yfuks", icon: false, if-underline: false, if-color: false)[github.com\/yfuks]],
)
  ]
)


== Experience

#regular-entry(
  [
    #strong[Développeur Full Stack JS\/TS], Freelance -- Paris, France

  ],
  [
    Mar 2022 – présent

  ],
  main-column-second-row: [
    - Reprise, correction, amélioration et mise à niveau d’un projet PHP (CodeIgniter) \/ React Native

    - Optimisation et amélioration d’un frontend React pour un client dans le domaine médical

    - Next.js, React, React Native, PostgreSQL, Docker, Github Actions, PHP, C++, Swift, Kotlin, Java

  ],
)

#regular-entry(
  [
    #strong[Tech Lead Marketplace], Booksy ex Kiute ex Leciseau -- Paris, France

  ],
  [
    Mar 2021 – Déc 2021

  ],
  main-column-second-row: [
    - Responsable d’une équipe de 3 développeurs

  ],
)

#regular-entry(
  [
    #strong[Développeur Full Stack JS\/TS GO], Booksy ex Kiute ex Leciseau -- Paris, France

  ],
  [
    Jan 2019 – Mar 2021

  ],
  main-column-second-row: [
    - Développement et évolution d'une marketplace de réservation de prestations coiffure en ligne

    - Intégré comme 3ᵉ développeur dans une entreprise en forte croissance (12 personnes à mon arrivée)

    - Refonte complète de l’app React Native (de 17k à 110k utilisateurs récurrents)

    - Next.js, React, React Native, Node.js, PostgreSQL, Docker, AWS, GraphQL, ElasticSearch, CircleCI

  ],
)

#regular-entry(
  [
    #strong[Développeur Mobile React Native], Péligourmet -- Paris, France

  ],
  [
    Jan 2018 – Sep 2018

  ],
  main-column-second-row: [
    - Création et déploiement de l’application React Native Péligourmet

  ],
)

#regular-entry(
  [
    #strong[CTO & co-fondateur], VRsity -- Paris, France

  ],
  [
    Fév 2017 – Mai 2018

  ],
  main-column-second-row: [
    - Développement d’un outil VR en C\# avec Unity

  ],
)

#regular-entry(
  [
    #strong[Développeur Full Stack JS\/TS (stage)], Donut.me -- Toulouse, France

  ],
  [
    Sep 2015 – Fév 2016

  ],
  main-column-second-row: [
    - Création d’une plateforme de chat en JS (type Slack\/Discord)

  ],
)

== Formation

#education-entry(
  [
    #strong[École 42], Bac+5 (équivalent) in Informatique -- Paris, France

  ],
  [
    Sep 2014 – Déc 2018

  ],
  main-column-second-row: [
    - Niveau 21

  ],
)

== Hard Skills

#strong[Langues:] Français (langue maternelle), Anglais (professionnel)

#strong[Langages:] JS\/TS, Golang, Python, SQL, PHP

#strong[Frameworks \/ Librairies:] React, React Native, Next.js, Node.js, Express, MongoDB, PostgreSQL, Docker, AWS, GraphQL, ElasticSearch, CircleCI, Github Actions

#strong[Infrastructure:] AWS, architecture distribuée

== Soft Skills

Esprit pragmatique, capacité de vulgarisation, sens du business, prise de recul et analyse stratégique, maîtrise du développement assisté par l’IA
