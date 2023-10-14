// import { Timestamp } from "firebase/firestore";
// import { atom } from "recoil";

// export interface Community {
//   id: string;
//   creatorId: string;
//   numberOfMembers: number;
//   privacyType: "public" | "restricted" | "private";
//   createdAt?: Timestamp;
//   imageURL?: string;
// }

// export interface CommunitySnippet {
//   communityId: string;
//   isModerator?: boolean;
//   imageURL?: string;
// }

// interface CommunityState {
//   mySnippets: CommunitySnippet[];
//   currentCommunity?: Community;
//   snippetsFetched: boolean;
// }

// const defaultCommunityState: CommunityState = {
//   mySnippets: [],
//   snippetsFetched: false,
// };

// export const communityState = atom<CommunityState>({
//   key: "communitiesState",
//   default: defaultCommunityState,
// });


import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restricted" | "private";
  createdAt?: Timestamp;
  imageURL?: string;
}

export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
  updateTimeStamp?: Timestamp;
}

interface CommunityState {
  mySnippets: CommunitySnippet[];
  currentCommunity?: Community;
  snippetsFetched: boolean;
}

export const defaultCommunityState: CommunityState = {
  mySnippets: [],
  snippetsFetched: false,
};

export const CommunityState = atom<CommunityState>({
  key: "communityState",
  default: defaultCommunityState,
});