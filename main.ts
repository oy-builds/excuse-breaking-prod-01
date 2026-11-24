import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Staging passed flawlessly, so technically this is a success: production was simply the first environment brave enough to test me on all 40,000 real users at once.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
