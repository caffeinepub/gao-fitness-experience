import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Post = { title : Text; content : Text };

  let store = Map.empty<Text, Post>();

  public shared ({ caller }) func post(title : Text, content : Text) : async () {
    if (store.containsKey(title)) {
      Runtime.trap("Post " # title # " already exists!");
    };
    store.add(title, { title; content });
  };

  public query ({ caller }) func getPost(title : Text) : async Post {
    switch (store.get(title)) {
      case (?post) { post };
      case (null) {
        Runtime.trap("Post " # title # " does not exist!");
      };
    };
  };

  public query ({ caller }) func getPosts() : async [Post] {
    store.values().toArray();
  };

  public shared ({ caller }) func deletePost(title : Text) : async () {
    if (store.containsKey(title)) {
      store.remove(title);
      return;
    };
    Runtime.trap("Post " # title # " does not exist!");
  };
};
