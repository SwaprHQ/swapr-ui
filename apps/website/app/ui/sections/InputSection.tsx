import { Card, Section } from "@/components";
import { Input } from "@swapr/ui";

export const InputSection = () => {
  return (
    <Section title="Input">
      <Card className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <Input
          label="Email"
          type="email"
          id="email"
          message="This is a message"
          placeholder="Input email here"
        />
        <Input
          label="Solid"
          type="email"
          id="email"
          placeholder="Input email here"
          variant="solid"
        />
        <Input
          label="Pastel"
          type="email"
          id="email"
          placeholder="Input email here"
          variant="pastel"
        />
        <Input
          label="Ghost"
          type="email"
          id="email"
          placeholder="Input email here"
          variant="ghost"
        />
        <Input
          label="Large (lg)"
          type="email"
          id="email"
          placeholder="Input email here"
          leftIcon="search"
          rightIcon="chevron-down"
          size="lg"
        />
        <Input
          label="Medium (md) - default"
          type="email"
          id="email"
          placeholder="Input email here"
          leftIcon="search"
          rightIcon="chevron-down"
          size="md"
        />
        <Input
          label="Small (sm)"
          type="email"
          id="email"
          placeholder="Input email here"
          leftIcon="search"
          rightIcon="chevron-down"
          size="sm"
        />
        <Input
          label="Disabled"
          type="email"
          id="email-2"
          disabled
          message="This is a message"
          placeholder="Input email here"
        />
        <Input
          label="With error"
          type="email"
          id="email-3"
          message="There is an error"
          placeholder="Input email here"
          isInvalid={true}
        />
      </Card>
    </Section>
  );
};
