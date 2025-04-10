export const HeroSection = () => (
  <div
    className="p-10 space-y-4 bg-surface-primary-base-em rounded-12 border border-outline-primary-base-em"
    id="about"
  >
    <h1 className="text-[42px] font-bold mb-8">Swapr UI</h1>
    <div className="flex">
      <div className="bg-surface-primary-high-em size-3"></div>
      <div className="bg-surface-success-med-em size-3"></div>
      <div className="bg-surface-danger-med-em size-3"></div>
      <div className="bg-surface-info-med-em size-3"></div>
    </div>
    <div className="max-w-2xl space-y-2 text-text-med-em">
      <p>
        Create create awesome user interfaces without the hussle of rebuild the
        same component all over again.
      </p>
      <p>
        See it in action on{" "}
        <a
          className="relative text-text-low-em hover:text-text-high-em"
          href="https://presagio.pages.dev/"
          target="_blank"
        >
          👁️ Presagio{" "}
          <div className="absolute top-0 -right-2 size-1.5 rounded-100 bg-surface-success-high-em"></div>
        </a>
      </p>
      <p>
        Inspired by{" "}
        <a
          href="https://atomizedesign.com/"
          className=" text-text-primary-med-em hover:text-text-primary-high-em"
          target="_blank"
        >
          Atomize Design System
        </a>{" "}
        built by{" "}
        <a
          href="https://swaprhq.io/"
          className=" text-text-primary-med-em hover:text-text-primary-high-em"
          target="_blank"
        >
          Swapr
        </a>
      </p>
    </div>
    <div className="flex justify-between w-full">
      <div></div>
      <div className="flex items-center space-x-2">
        <a
          className="hover:underline hover:text-text-primary-high-em bg-surface-surface-white-smoke-2 rounded-12 px-2 py-1 font-medium  text-sm"
          href="https://github.com/SwaprHQ/swapr-ui"
          target="_blank"
        >
          Github
        </a>
        <a
          className="hover:underline hover:text-text-primary-high-em bg-surface-surface-white-smoke-2 rounded-12 px-2 py-1 font-medium  text-sm"
          href="https://www.npmjs.com/package/@swapr/ui"
          target="_blank"
        >
          NPM
        </a>
      </div>
    </div>
  </div>
);
