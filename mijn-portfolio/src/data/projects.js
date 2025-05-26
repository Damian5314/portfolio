const projects = [
    {
      slug: "QR logistics",
      title: "QR logistics",
      image: `${import.meta.env.BASE_URL}QRLogistics5.png`,
      description: "Een logistieke webapplicatie waarmee bedrijven hun orders, zendingen en voorraad eenvoudig kunnen beheren via QR-scans. Ontwikkeld met aandacht voor gebruiksgemak, inzicht en procesoptimalisatie.",
      tag: "Schoolproject",
      techstack: "Frontend: React Native met TypeScript en Tailwind CSS (NativeWind) Backend: C# met het .NET-framework",
      gallery: [
        `${import.meta.env.BASE_URL}QRLogistics1.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics2.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics3.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics4.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics5.png`,
        `${import.meta.env.BASE_URL}QRLogistics6.png`,
      ]
    },
    {
      slug: "voetbal-app",
      title: "Voetbal-app",
      image: `${import.meta.env.BASE_URL}voetbalbanner.png`,
      description: "Een sociale voetbal-app waarin gebruikers wedstrijden kunnen voorspellen, vrienden kunnen volgen en coins verdienen voor correcte voorspellingen. Coins zijn in te wisselen voor profiel-aanpassingen of cosmetische items.",
      tag: "Persoonlijk project",
      techstack: "Frontend: React Native met JavaScript Backend: Geen backend code aanwezig voor nu",
      gallery: [
        `${import.meta.env.BASE_URL}voetbalbanner.png`,        
        `${import.meta.env.BASE_URL}voetbal1.jpeg`,
        `${import.meta.env.BASE_URL}voetbal2.jpeg`,
        `${import.meta.env.BASE_URL}voetbal3.jpeg`,
        `${import.meta.env.BASE_URL}voetbal4.jpeg`
      ]
    },
    {
        slug: "TableTech",
        title: "TableTech",
        image: `${import.meta.env.BASE_URL}TableTech4.png`,
        description: "Een alles-in-één dashboard voor horecazaken, waarmee personeel menu’s kan beheren, feedback kan ontvangen, voorraden bijhouden en klanttevredenheid verhogen via digitale bestel- en contactmomenten.",
        tag: "Persoonlijk project",
        techstack: "",
        gallery: [
          `${import.meta.env.BASE_URL}TableTech1.jpeg`,
          `${import.meta.env.BASE_URL}TableTech2.jpeg`,
          `${import.meta.env.BASE_URL}TableTech3.png`,
          `${import.meta.env.BASE_URL}TableTech4.png`,
          `${import.meta.env.BASE_URL}TableTech5.png`,
          `${import.meta.env.BASE_URL}TableTech6.png`,
          `${import.meta.env.BASE_URL}TableTech7.png`
        ]
      },
      {
        slug: "TableTech Website",
        title: "TableTech Website",
        image: `${import.meta.env.BASE_URL}TableTechWeb1.png`,
        description: "De officiële website van TableTech waarmee horecaondernemers kennismaken met het platform. De site legt de voordelen uit, bevat call-to-actions en is geoptimaliseerd voor SEO en conversie.",
        tag: "Persoonlijk project",
        techstack: "",
        gallery: [
          `${import.meta.env.BASE_URL}TableTechWeb1.png`,
          `${import.meta.env.BASE_URL}TableTechWeb2.png`,
          //`${import.meta.env.BASE_URL}TableTech3.png`,
          //`${import.meta.env.BASE_URL}TableTech4.png`,
          //`${import.meta.env.BASE_URL}TableTech5.png`,
          //`${import.meta.env.BASE_URL}TableTech6.png`,
          //`${import.meta.env.BASE_URL}TableTech7.png`
        ]
      },
      {
        slug: "willes-rijschool",
        title: "Willes Rijschool Website",
        image: `${import.meta.env.BASE_URL}willes1.png`,
        description: "Een moderne en overzichtelijke website voor Willes Rijschool waarmee bezoekers eenvoudig informatie kunnen vinden over rijlessen, tarieven en contactgegevens. De site is ontworpen met gebruiksvriendelijkheid, vertrouwen en conversie in gedachten.",
        tag: "Klantproject",
        techstack: "HTML, CSS, JavaScript, responsive design",
        gallery: [
          `${import.meta.env.BASE_URL}willes1.png`,
          `${import.meta.env.BASE_URL}willes2.png`,
          `${import.meta.env.BASE_URL}willes3.png`
        ]
      },
      {
        slug: "cabo-feira",
        title: "CaboFeira",
        image: `${import.meta.env.BASE_URL}CaboFeira1.png`,
        description: "CaboFeira is een online marktplaats speciaal ontwikkeld voor de Kaapverdische gemeenschap. Op deze gebruiksvriendelijke website kunnen mensen eenvoudig tweedehands spullen verkopen of zoeken naar producten.",
        tag: "Klantproject",
        techstack: "HTML, CSS, JavaScript, responsive design",
        gallery: [
          `${import.meta.env.BASE_URL}CaboFeira1.png`,
          //`${import.meta.env.BASE_URL}cabo2.png`,
          //`${import.meta.env.BASE_URL}cabo3.png`
        ]
      },
      {
        slug: "Space Monkey",
        title: "Space Monkey",
        image: `${import.meta.env.BASE_URL}SpaceMonkey1.png`, 
        description: "Space Monkey is een interactieve terminal-game geschreven in Python waarin je speelt als Jararis, een hyperintelligente aap op een missie om de mensheid te redden. De game combineert avontuur, humor en puzzels met een verhalende ervaring waarin keuzes daadwerkelijk impact hebben. Van het crashen op een mysterieuze planeet tot ontsnappen uit een alien-basis en terugkeren naar Rotterdam Zuid – alles is mogelijk. De speler wordt uitgedaagd met raadsels, multiple choice-situaties en zelfs een potje galgje, allemaal met een flinke dosis satire.",
        tag: "Schoolproject",
        techstack: "Python",
        gallery: [
          `${import.meta.env.BASE_URL}SpaceMonkey1.png`,
        ]
      },
      {
        slug: "2D Battle Game",
        title: "2D Battle Game",
        image: `${import.meta.env.BASE_URL}PokemonHackathon3.png`, 
        description: "Tijdens een GitHub Copilot Hackathon op 21 mei 2025, georganiseerd door Xebia in Hilversum, ontwikkelde ik samen met mijn team een eenvoudige Pokémon-achtige game. In deze browsergame verplaats je je karakter over een speelveld, kun je wilde Pokémon tegenkomen en ga je gevechten aan via een turn-based battle-systeem. Het doel was om met behulp van AI-assistentie (GitHub Copilot) binnen enkele uren een werkende game te bouwen.",
        tag: "Evenement project",
        techstack: "HTML, Javascript, GitHub Copilot",
        gallery: [
          `${import.meta.env.BASE_URL}PokemonHackathon1.png`,
          `${import.meta.env.BASE_URL}PokemonHackathon2.png`,
          `${import.meta.env.BASE_URL}PokemonHackathon3.png`
        ]
      },
      {
        slug: "brick-breaker",
        title: "Brick Breaker",
        image: `${import.meta.env.BASE_URL}brick1.png`,
        description: "Brick Breaker is een moderne versie van het klassieke arcadespel, gemaakt in Lua met de LÖVE 2D-engine. De game bevat upgrades, meerdere ballen, verschillende soorten blokken en een kleurrijke interface. Gebouwd als solo-project met focus op het leren van gamedevelopment.",
        tag: "Persoonlijk project",
        techstack: "Lua, LÖVE 2D",
        gallery: [
          `${import.meta.env.BASE_URL}brick1.png`,
          `${import.meta.env.BASE_URL}brick2.png`,
          `${import.meta.env.BASE_URL}brick3.png`,
        ]
      }
  ];
  
  export default projects;
  