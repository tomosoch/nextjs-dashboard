
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

Workflow
git init
git add .  STAGE
git reset .  UNSTAGE
git reset --hard UNSTAGE AND DELETE

git commit -m "Title" -m "Description"
git push origin master or main

git branch -M main
git remote add origin https://github.com/tomosoch/nextjs-dashboard.git
git push -u origin main

git init initializes a new Git repository.
git add . stages all changes in the current directory.
git reset . unstages all changes in the current directory.
git reset --hard unstages changes and deletes them.
git commit -m "Title" -m "Description" creates a new commit with a title and description.
git push origin master or git push origin main pushes the committed changes to a remote repository.
git branch -M main renames the current branch to "main".
git remote add origin https://github.com/tomosoch/nextjs-dashboard.git adds a remote repository named "origin" with the specified URL.
git push -u origin main pushes the "main" branch to the "origin" remote repository and sets it as the upstream branch.
These commands are commonly used to initialize a repository, stage and commit changes, push changes to a remote repository, and manage branches.

psql "postgres://default:WiRND9MepL2Q@ep-misty-voice-39722018.us-east-1.postgres.vercel-storage.com:5432/verceldb"

POSTGRES_URL="postgres://default:WiRND9MepL2Q@ep-misty-voice-39722018-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb"

POSTGRES_PRISMA_URL="postgres://default:WiRND9MepL2Q@ep-misty-voice-39722018-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"

POSTGRES_URL_NON_POOLING="postgres://default:WiRND9MepL2Q@ep-misty-voice-39722018.us-east-1.postgres.vercel-storage.com:5432/verceldb"

POSTGRES_USER="default"

POSTGRES_HOST="ep-misty-voice-39722018-pooler.us-east-1.postgres.vercel-storage.com"

POSTGRES_PASSWORD="WiRND9MepL2Q"

POSTGRES_DATABASE="verceldb"


Navigate to your code editor and rename the .env.example file to .env. Paste in the copied contents from Vercel.

Important: Go to your .gitignore file and make sure .env is in the ignored files to prevent your database secrets from being exposed when you push to GitHub.


npm i @vercel/postgres