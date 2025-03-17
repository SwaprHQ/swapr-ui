import { Card, Section } from "@/components";
import {
  Button,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  Icon,
  VisuallyHidden,
  DialogDescription,
} from "@swapr/ui";
import { useState } from "react";

export const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Section title="Modal">
      <Card className="flex space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Basic</Button>
          </DialogTrigger>
          <DialogContent append="bottom">
            <DialogHeader>
              <DialogTitle>Select a token</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <ul>
                {Array(15)
                  .fill("")
                  .map((_, i) => (
                    <li key={i}>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </li>
                  ))}
              </ul>
            </DialogBody>
          </DialogContent>
        </Dialog>
        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogTrigger asChild>
            <Button>Confirm</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader size="xl" className="text-center">
              <DialogClose name="arrow-left" />
              <DialogTitle>Confirm Swap</DialogTitle>
            </DialogHeader>
            <DialogBody>
              This action cannot be undone. This will permanently delete as your
              account and remove your data from our servers.
            </DialogBody>
            <DialogFooter>
              <Button
                width="full"
                colorScheme="main"
                variant="secondary"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                width="full"
                colorScheme="main"
                variant="primary"
                onClick={closeModal}
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open success modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <VisuallyHidden asChild>
                <DialogTitle className="px-4">Transaction Modal</DialogTitle>
              </VisuallyHidden>
            </DialogHeader>
            <VisuallyHidden asChild>
              <DialogDescription className="px-4">
                Here we display a Transaction information
              </DialogDescription>
            </VisuallyHidden>
            <DialogBody className="mx-auto mb-8 w-full max-w-fit space-y-2 md:mx-0 md:max-w-[496px]">
              <div className="flex flex-col items-center w-full space-y-12">
                <>
                  <div className="bg-surface-success-base-em p-4 rounded-100">
                    <Icon
                      name="tick"
                      size={38}
                      className=" text-surface-success-high-em"
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-2xl font-semibold">
                      Transaction successful!
                    </p>
                    <p className="text-center text-md text-text-low-em">
                      The transaction has been completed.
                      <br />
                      You can close this window now.
                    </p>
                  </div>
                </>
              </div>
            </DialogBody>
            <DialogFooter>
              <a
                href="#"
                target="_blank"
                className="w-full"
                rel="noopener noreferrer"
              >
                <Button
                  width="full"
                  colorScheme="main"
                  variant="primary"
                  size="lg"
                >
                  <>
                    View in explorer <Icon name="arrow-top-right" />
                  </>
                </Button>
              </a>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Card>
    </Section>
  );
};
