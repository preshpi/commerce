import { BiShare, BiLink } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FloatButton } from "antd";
import { EmailShareButton, WhatsappShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const ShareIcons = ({ product }) => {
  const shareUrl = `https://flairstyle.vercel.app/products/${product.permalink}`;
  const notify = () => toast.success("Link copied!");

  return (
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<BiShare />}
    >
      <FloatButton
        icon={
          <WhatsappShareButton url={shareUrl}>
            <AiOutlineWhatsApp />
          </WhatsappShareButton>
        }
      />
      <FloatButton
        icon={
          <EmailShareButton url={shareUrl}>
            <CiMail />
          </EmailShareButton>
        }
      />
      <FloatButton
        icon={
          <>
            <CopyToClipboard text={shareUrl} onCopy={notify}>
              <BiLink />
            </CopyToClipboard>
            <Toaster />
          </>
        }
      />
    </FloatButton.Group>
  );
};

export default ShareIcons;
