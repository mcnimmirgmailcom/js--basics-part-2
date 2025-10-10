# 🤖 JavaScript i praktiken - Basics part 2

I denna övning tränar du grunderna i JavaScript: operators, expressions och vanliga metoder för strängar, arrayer och objekt. Övningarna är uppdelade i ett flertal .js-filer. Kör unit tests via terminalen för att kontrollera din lösning.

## 👥 Utförande

Det går fint att göra dessa uppgifter själv. Om man känner sig på osäker koncepten är parprogrammering ett utmärkt alternativ. Det vill säga att ni jobbar på en dator två och två för att tillsammans lista ut lösningarna.

## 🧑‍🔧 Så kör du testerna (NPM & Vitest)

### Intallera dependencies

Projektet har bara en "dev dependency" - testbiblioteket Vitest. Följ instruktionerna nedan för att köra testen och kontrollera att dina lösningar ger önskat utfall.

- Öppna terminalen (Exempelvis direkt i din IDE)
- Se till att du är i mappen för detta projekt
- Installera dependencies

```bash
npm install
```

- Kör alla tester(watch-läge):

```bash
npm test
```

- Kör en enskild testfil (watch-läge):

```bash
npm test methods/array-methods.test.js - eller vad filnamnet kan tänkas vara
```

- Tryck `q`eller `ctrl + c`för att ta dig ur watch-läge och avbryta testandet

#### "npm"-kommandot kräver att man har installerat Node

#### "Watch-läge" betyder att testerna körs om efter att du sparat dina ändringar

## 💡 Tips

Filstrukturen under `tests/` speglar dina lösningsfiler. Fixa funktionerna tills testerna blir gröna ✅.
