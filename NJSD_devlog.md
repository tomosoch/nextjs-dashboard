
EDIT
/media/t/New Volume/workspace/NCMK/DNJS/nextjs-dashboard/next.config.js
module.exports = {
    // ... rest of the configuration.
    output: 'standalone',
  }

CREATE
/media/t/New Volume/workspace/NCMK/DNJS/nextjs-dashboard/nodemon.json
  {   
    "ignore": ["node_modules", ".next"],
    "watch": ["**/*"],
    "ext": "js json",
    "exec": "next dev --port 4444"
}

EDIT
/media/t/New Volume/workspace/NCMK/DNJS/nextjs-dashboard/package.json
"dev": "nodemon",


import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

EDIT
/media/t/New Volume/workspace/NCMK/DNJS/nextjs-dashboard/app/ui/fonts.ts
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
