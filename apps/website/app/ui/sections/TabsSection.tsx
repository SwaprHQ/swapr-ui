import { Section } from "@/components";
import { TabBody, TabGroup, TabHeader, TabPanel, TabStyled } from "@swapr/ui";

export const TabsSection = () => {
  return (
    <Section title="Tabs">
      <div className="space-y-5">
        <p>
          Tabs is based on{" "}
          <a
            className="text-text-primary-main hover:underline"
            href="https://headlessui.com/react/tabs"
          >
            headlessui tabs
          </a>
          , check out their docs for usage.
        </p>
        <div className="w-full max-w-md px-2 sm:px-0">
          <TabGroup
            onChange={(index: number) =>
              console.log("Changed selected tab to:", index)
            }
          >
            <TabHeader>
              <TabStyled>All bets</TabStyled>
              <TabStyled>
                Active
                <div className="bg-surface-surface-0 text-2xs border border-outline-low-em rounded-6 p-1 px-1.5 ml-2">
                  01
                </div>
              </TabStyled>
              <TabStyled>Unredeemed</TabStyled>
              <TabStyled>Complete</TabStyled>
            </TabHeader>
            <TabBody className="mt-2">
              <TabPanel>
                <div className="p-5 bg-surface-surface-2 rounded-4">
                  All bets
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-5 bg-surface-surface-2 rounded-4">Active</div>
              </TabPanel>
              <TabPanel>
                <div className="p-5 bg-surface-surface-2 rounded-4">
                  Unredeemed
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-5 bg-surface-surface-2 rounded-4">
                  Complete
                </div>
              </TabPanel>
            </TabBody>
          </TabGroup>
        </div>
      </div>
    </Section>
  );
};
