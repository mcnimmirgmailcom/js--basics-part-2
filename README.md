# 🤖 JavaScript i praktiken - Basics part 2

I denna övning tränar du grunderna i JavaScript: operators, expressions och vanliga metoder för strängar, arrayer och objekt. Övningarna är uppdelade i ett flertal .js-filer. Kör unit tests via terminalen för att kontrollera din lösning.

## 👥 Utförande

Det går fint att göra dessa uppgifter själv. Om man känner sig osäker på koncepten är parprogrammering ett utmärkt alternativ. Det vill säga att ni jobbar på en dator två och två för att tillsammans lista ut lösningarna.

## 🧑‍🔧 Så kör du unit tests (NPM & Vitest)

### Intallera dependencies

Projektet har bara en "dev dependency" - testbiblioteket Vitest. Följ instruktionerna nedan för att köra testen och kontrollera att dina lösningar ger önskat utfall.

- Öppna terminalen (Exempelvis direkt i din IDE)
- Installera dependencies

```bash
npm install
```

### Test-kommandon

- Kör alla tester(watch-läge):

```bash
npm run test
```

- Kör en enskild testfil (watch-läge):

```bash
npm run test methods/array-methods.test.js - eller vad filnamnet kan tänkas vara
```

#### "npm"-kommandot kräver att man har installerat Node

#### "Watch-läge" betyder att testerna körs om efter att du sparat dina ändringar

## 💡 Tips

Filstrukturen under `tests/` speglar dina lösningsfiler. De kan ge mer klarhet i vad det önskade utfallet är. Fixa funktionerna tills testerna blir gröna ✅.
