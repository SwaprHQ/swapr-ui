import { Section } from "@/components";
import {
  Button,
  errorToast,
  successToast,
  warningToast,
  toast,
} from "@swapr/ui";

export const ToastSection = () => {
  return (
    <Section title="Toast">
      <div className="flex space-x-4">
        <Button onClick={() => toast({ children: "Default Toast" })}>
          Open Default Toast
        </Button>
        <Button
          colorScheme="danger"
          onClick={() =>
            errorToast({ children: "Error Toast", colorScheme: "error" })
          }
        >
          Open Error Toast
        </Button>
        <Button
          colorScheme="success"
          onClick={() =>
            successToast({
              children: "Success Toast",
              colorScheme: "success",
            })
          }
        >
          Open Success Toast
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            warningToast({
              children: "Warning Toast",
              colorScheme: "warning",
            })
          }
        >
          Open Warning Toast
        </Button>
      </div>
    </Section>
  );
};
