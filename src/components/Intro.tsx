import Link from "next/link";

import { IconLink } from "@/components/IconLink";
import { Logo } from "@/components/Logo";
import { SignUpForm } from "@/components/SignUpForm";

function BookIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  );
}

function CodeIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

function ChatIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

function FormIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
        clipRule="evenodd"
      />
      <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
    </svg>
  );
}

function ExploreIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TwitterIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  );
}

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" width={160} height={160} />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        UAE Codes{" "}
        <span className="text-sky-300">
          Celebrating the spirit of coding in UAE
        </span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        The UAE Codes Day is a yearly event and key part of the National Program
        for Coders. Initiated by His Highness{" "}
        <a href="https://www.youtube.com/watch?v=EnS_kT48aFg">
          <span className="text-sky-300 underline">
            Sheikh Mohammed bin Rashid Al Maktoum
          </span>
        </a>{" "}
        , this program, launched on July 10th, 2021, aims to position the UAE as
        a leading force in coding and digital innovation.
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://ai.gov.ae/wp-content/uploads/2023/10/UAE-CODES-GUIDE-2023-ENGLISH.pdf"
          icon={BookIcon}
          target="_blank"
          className="flex-none"
        >
          Guide
        </IconLink>
        <IconLink
          href="https://forms.office.com/Pages/DesignPageV2.aspx?prevorigin=Marketing&origin=NeoPortalPage&subpage=design&id=IO3LosEDp0SimGTNnPdGVvzwbnHh8p5Ho1NdMiHPEmZUQUNOUFo0VDEwMEZDQlpGRUxVUkM2MzZaSSQlQCN0PWcu"
          icon={FormIcon}
          target="_blank"
          className="flex-none"
        >
          Participate
        </IconLink>
        <IconLink href="/learn" icon={ExploreIcon} className="flex-none">
          Learn
        </IconLink>
      </div>
    </>
  );
}

export function LearnIntro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" width={160} height={160} />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Learn coding to{" "}
        <span className="text-sky-300">ignite your programming skill</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        Scroll down to explore the exciting realm of programming. With coding
        skills, your imagination is your limit. You have the potential to create
        sophisticated software applications, captivating websites, and engaging
        games. Dive into this world powered by logic and creativity.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://chat.codershq.ae"
          icon={ChatIcon}
          target="_blank"
          className="flex-none"
        >
          Gen AI
        </IconLink>
        <IconLink
          href="https://uaecodes.github.io/uaecodes/"
          icon={CodeIcon}
          target="_blank"
          className="flex-none"
        >
          One Line
        </IconLink>
        <IconLink href="/" icon={ExploreIcon} className="flex-none">
          Home
        </IconLink>
      </div>
    </>
  );
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{" "}
      <IconLink href="#" icon={TwitterIcon} compact large>
        uaeai_2031
      </IconLink>
    </p>
  );
}
