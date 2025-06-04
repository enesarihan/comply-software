// components/WhatsAppLink.tsx
import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

interface WhatsAppLinkProps {
  phoneNumber: string;
  message?: string;
  children?: React.ReactNode;
  className?: string;
}

const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
  phoneNumber,
  message = "",
  children,
  className,
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 ease-in-out
                 sm:px-2 sm:text-lg
                 md:px-2 md:py-2 md:text-xl
                 lg:px-2 lg:py-2 lg:text-2xl
                 ${className || ""}`}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}
      whileTap={{ scale: 0.95 }}
    >
      {children ? (
        children
      ) : (
        <>
          <BsWhatsapp />
        </>
      )}
    </motion.a>
  );
};

export default WhatsAppLink;
