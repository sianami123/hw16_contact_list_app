interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    // overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* modal content */}
      <div className="bg-white p-4 rounded-lg">{children}</div>
    </div>
  );
}
