import Shop from "../assets/Icon/Shop.svg";
import Steam from "../assets/Icon/Steam.svg";
import Safety from "../assets/Icon/Safety.svg";
import Search from "../assets/Icon/Search.svg";
import Community from "../assets/Icon/Community.svg";
import Chat from "../assets/Icon/Chat.svg";
import UserProfile from "../assets/Icon/UserProfile.svg";
import Mac from "../assets/Icon/Mac.svg";
import Windows from "../assets/Icon/Windows.svg";
import Share from "../assets/Icon/Share.svg";
import Message from "../assets/Icon/Message.svg";
import Like from "../assets/Icon/Like.svg";

export const LoadIcons = () => {
  return [
    { name: "Store", Icon: Shop },
    { name: "Steam", Icon: Steam },
    { name: "Safety", Icon: Safety },
    { name: "Search", Icon: Search },
    { name: "Community", Icon: Community },
    { name: "Chat", Icon: Chat },
    { name: "UserProfile", Icon: UserProfile },
    { name: "Mac", Icon: Mac },
    { name: "Windows", Icon: Windows },
    { name: "Like", Icon: Like },
    { name: "Share", Icon: Share },
    { name: "Message", Icon: Message },
  ];
};

export const GetIcon = (icon, size, stroke, fill) => {
  const IcoEntry = LoadIcons().find((ico) => ico.name === icon);
  const Icon = IcoEntry?.Icon;
  return Icon ? (
    <Icon width={size} height={size} stroke={stroke} fill={fill} />
  ) : null;
};
