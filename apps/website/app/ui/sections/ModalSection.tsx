import { Section } from "@/components";
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
} from "@swapr/ui";
import { useState } from "react";

export const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Section title="Modal">
      <div className="flex space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
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
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader size="xl" className="text-center">
              <DialogClose>
                <Icon name="arrow-left" />
              </DialogClose>
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
                variant="primary"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                width="full"
                colorScheme="success"
                variant="secondary"
                onClick={closeModal}
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Section>
  );
};
