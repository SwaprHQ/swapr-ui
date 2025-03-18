import { Card, Section } from "@/components";

export const ShadowSection = () => {
  return (
    <Section title="Box Shadows">
      <Card className="">
        <div className="space-y-2">
          <div className="bg-surface-disabled-low-em rounded-16 shadow-1 w-[900px] h-[600px]">
            <div className="bg-surface-disabled-med-em rounded-16 shadow-2 w-[800px] h-[500px]">
              <div className="bg-surface-disabled-high-em rounded-16 shadow-3 w-[700px] h-[400px]">
                <div className="bg-surface-disabled-high-em rounded-16 shadow-4 w-[600px] h-[300px]">
                  <div className="bg-surface-disabled-high-em rounded-16 shadow-5 w-[500px] h-[200px]">
                    <div className="bg-surface-disabled-high-em rounded-16 shadow-6 w-[400px] h-[100px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};
