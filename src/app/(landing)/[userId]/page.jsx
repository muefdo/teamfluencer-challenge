"use client";

import React, { useEffect, useState } from "react";
import { Users } from "@/assets";
import { usePathname } from "next/navigation";
import Image from "next/image";
import InstagramProfile from "@/components/instagramProfile";
import TiktokProfile from "@/components/tiktokProfile";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const userId = usePathname();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = Users;
        const foundUser = data.find(
          (user) => "/" + user.insta.username === userId
        );
        setUser(foundUser);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId) {
      getData();
    }
  }, [userId]);

  return (
    <div className="mx-8 pt-8 py-32">
      <h1 className="font-bold text-4xl p-5 text-slate-700">User Details</h1>
      {user ? (
        <div className="">
          <div
            key={"personel_info_section"}
            className="font-semibold m-5 lg:flex "
          >
            <div>
              <Image
                width={200}
                height={200}
                src={user.insta.profile_pic}
                className="rounded-full"
              />
            </div>
            <div className="mx-10 max-lg:mt-10">
              <h1 className="font-extrabold text-2xl mb-2">
                Basic Information
              </h1>
              <p className="text-slate-600">
                Name:{" "}
                <span className="text-black">
                  {user.name}, {user.surname}
                </span>
              </p>
              <p className="text-slate-600">
                Age: <span className="text-black">{user.age}</span>
              </p>
              <p className="text-slate-600">
                Job: <span className="text-black">{user.job}</span>
              </p>
              <p className="text-slate-600">
                Gender: <span className="text-black">{user.gender}</span>
              </p>
              <p className="text-slate-600">
                Country: <span className="text-black">{user.country}</span>
              </p>
              <p className="text-slate-600">
                Language: <span className="text-black">{user.language}</span>
              </p>
              <p className="text-slate-600">
                Hobbies:{" "}
                <span className="text-black">{user.hobbies.join(", ")}</span>
              </p>
            </div>
            <div className="mx-10 max-lg:mt-10">
              <h1 className="font-extrabold text-2xl mb-2">
                Instagram Information
              </h1>
              <p className="text-slate-600">
                Username:{" "}
                <span className="text-black">{user.insta.username}</span>
              </p>
              <p className="text-slate-600">
                Full Name:{" "}
                <span className="text-black">{user.insta.full_name}</span>
              </p>
              <p className="text-slate-600">
                Bio: <span className="text-black">{user.insta.biography}</span>
              </p>
              <p className="text-slate-600">
                Followers:{" "}
                <span className="text-black">{user.insta.followers}+</span>
              </p>
              <p className="text-slate-600">
                Following:{" "}
                <span className="text-black">{user.insta.following}</span>
              </p>
              <p className="text-slate-600">
                Average Like:{" "}
                <span className="text-black">{user.insta.average_like}</span>
              </p>
              <p className="text-slate-600">
                Post Number:{" "}
                <span className="text-black">{user.insta.post_number}</span>
              </p>
            </div>
            <div className="mx-10 max-lg:mt-10">
              <h1 className="font-extrabold text-2xl mb-2">
                TikTok Information
              </h1>
              <p className="text-slate-600">
                Username:{" "}
                <span className="text-black">{user.tiktok.username}</span>
              </p>
              <p className="text-slate-600">
                Nickname:{" "}
                <span className="text-black">
                  {user.tiktok.tiktok_nickname}
                </span>
              </p>
              <p className="text-slate-600">
                Bio:{" "}
                <span className="text-black">
                  {user.tiktok.bio_description}
                </span>
              </p>
              <p className="text-slate-600">
                Followers:{" "}
                <span className="text-black">{user.tiktok.followers}+</span>
              </p>
              <p className="text-slate-600">
                Following:{" "}
                <span className="text-black">{user.tiktok.following}+</span>
              </p>
              <p className="text-slate-600">
                Hearts:{" "}
                <span className="text-black">{user.tiktok.hearts}+</span>
              </p>
              <p className="text-slate-600">
                Post Number:{" "}
                <span className="text-black">{user.insta.post_number}</span>
              </p>
            </div>
          </div>

          <div key={"instagram"} className="font-semibold">
            <h1 className="font-extrabold text-2xl ">Instagram Details</h1>
            <InstagramProfile
              username={user.insta.username}
              image={user.insta.profile_pic}
              fullname={user.insta.full_name}
              averageLike={user.insta.average_like}
              bio={user.insta.biography}
              followers={user.insta.followers}
              following={user.insta.following}
              postNumber={user.insta.post_number}
            />
          </div>
          <div key={"tiktok"} className="font-semibold">
            <h1 className="font-extrabold text-2xl ">Tiktok Details</h1>
            <TiktokProfile
              username={user.tiktok.username}
              image={user.tiktok.profile_pic}
              fullname={user.tiktok.full_name}
              hearts={user.tiktok.hearts}
              averageLike={user.tiktok.tiktok_average_like}
              bio={user.tiktok.bio_description}
              followers={user.tiktok.followers}
              following={user.tiktok.following}
              postNumber={user.insta.post_number}
            />
          </div>
          <div key={"tiktok"} className="font-semibold my-5">
            <h1 className="font-extrabold text-2xl ">History</h1>
            <p>
              Web scraping yaparak var olan hesaplardan postları çekebilirim
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
