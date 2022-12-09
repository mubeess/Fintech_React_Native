import { StyleSheet } from "react-native";
import { Modal } from "native-base";
import RegularText from "./RegularText";
import React, { ReactNode } from "react";
type ModalProps = {
  isOpened: boolean;
  title: string;
  body: string;
  children: ReactNode;
};
const AppModal = ({ isOpened, title, body, children }: ModalProps) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpened}>
      <Modal.Content style={styles.modalContent}>
        <RegularText style={styles.title} text={title} />
        <RegularText style={styles.content} text={body} />
        {children}
      </Modal.Content>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContent: {
    width: "80%",
    minHeight: 246,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  title: {
    fontWeight: "800",
    textAlign: "center",
  },
  content: {
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
  },
});
export default AppModal;
