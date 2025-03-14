import { Card, Section } from "@/components";
import {
  Button,
  errorToast,
  successToast,
  warningToast,
  toast,
  infoToast,
} from "@swapr/ui";

export const ToastSection = () => {
  return (
    <Section title="Toast">
      <Card className="space-y-4">
        <div className="flex space-x-4">
          <Button
            onClick={() => toast({ children: "Hello Toast!" })}
            variant="secondary"
          >
            Default
          </Button>
          <Button
            colorScheme="danger"
            onClick={() =>
              errorToast({
                children: "Transaction failed",
                colorScheme: "error",
              })
            }
          >
            Error
          </Button>
          <Button
            colorScheme="success"
            onClick={() =>
              successToast({
                children: "Bet placed",
                colorScheme: "success",
              })
            }
          >
            Success
          </Button>
          <Button
            variant="secondary"
            colorScheme="danger"
            onClick={() =>
              warningToast({
                children: "Severe weather, drizzle expected in Sanabria",
                colorScheme: "warning",
              })
            }
          >
            Warning
          </Button>
          <Button
            variant="tertiary"
            onClick={() =>
              infoToast({
                children: `Hurry up, last items!`,
              })
            }
          >
            info
          </Button>
        </div>
        <div className="flex space-x-4">
          <Button
            onClick={() =>
              successToast({
                colorScheme: "success",
                children: "Stack created",
                actionText: "open",
                actionOnClick: () => alert("btn click toast"),
              })
            }
          >
            with action
          </Button>
          <Button
            onClick={() =>
              infoToast({
                iconName: "download",
                children: `E-book, "Savage" is ready to download`,
                actionText: "Download",
                actionOnClick: () => console.log("Downloading..."),
              })
            }
          >
            Download
          </Button>
        </div>
      </Card>
    </Section>
  );
};
