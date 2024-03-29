"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function TitlePageLogin() {
  const TEXTS = [
    "friendly interactive social hub",
    "flourishing interactions in social habitats",
    "friendly interspecies social hub",
    "fascinating interactions, social haven",
    "fantastic interspecies socializing hub",
    "friendly invitations, social habitat",
    "flourish in social havens",
    "fellow creatures in social harmony",
    "fun inhabitants sharing harmony",
    "friendly interspecies social hangouts",
    "friendly invites for social happiness",
    "furry invitations to social hangouts",
    "friendly interactions and social harmony",
    "friendly individuals' social habitat",
    "find incredibly special hangouts",
    "frolicking in silly humor",
    "fuzzy individuals sharing hilarities",
  ];
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const [helpContent, setHelpContent] = useState("About");

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="h-screen w-screen bg-[url('/backgrounds/titleScreenBg.png')] bg-cover">
      <div className="absolute mb-5% flex h-85% w-full items-center justify-center">
        <h1 className="text-center text-4xl text-pink-300">
          <TextTransition springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        {/* music */}
        <audio
          src="/music/title-screen-my-little-world-simon-folwar.mp3"
          autoPlay
          loop
        ></audio>
        {/* title of game */}
        {/* <div className="absolute top-0 flex h-1/2 w-1/2 items-center justify-center bg-[url('/backgrounds/fishPinkText.png')] bg-contain bg-center bg-no-repeat"></div> */}
        <div className="absolute inset-y-8% flex h-2/5 w-2/5 items-center justify-center bg-[url('/backgrounds/fishPinkText.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className="absolute inset-y-8% flex h-2/5 w-2/5 items-center justify-center bg-[url('/backgrounds/fishPinkText.png')] bg-contain bg-center bg-no-repeat"></div>
        {/* login cloud */}
        <a
          href="/api/auth/login/google"
          className="absolute bottom-32 h-270 w-500 bg-[url('/objects/loginCloud.png')] bg-cover hover:bg-[url('/objects/loginCloudHover.png')]"
        ></a>
        {/* help cloud */}
        <div
          className="absolute right-8 top-8 h-170 w-300 bg-[url('/objects/helpCloud.png')] bg-cover hover:bg-[url('/objects/helpCloudHover.png')]"
          onClick={() => {
            setShowHelpPopup(true);
          }}
        ></div>

        {/* how to play pop up */}
        {showHelpPopup && (
          <div className="z-50 flex h-screen w-screen items-center justify-center overflow-hidden overscroll-none text-5xl text-white">
            <div className="z-10 h-5/6 w-3/4 rounded-3xl bg-[url('/backgrounds/pinkBg.png')] bg-cover outline outline-8 outline-white">
              {/* nav bar */}
              <div className="hover:pointer mt-3 flex items-center justify-evenly bg-[url('/backgrounds/whiteGrayBg.png')] p-2 text-amber-950">
                <span
                  className={`${helpContent === "About" ? "rounded-xl bg-black bg-opacity-10 p-2 pl-3 pr-3 underline " : "text-amber-950 no-underline "} hover:cursor-pointer`}
                  onClick={() => {
                    setHelpContent("About");
                  }}
                >
                  About
                </span>
                <span
                  className={`${helpContent === "Multiplayer" ? "rounded-xl bg-black bg-opacity-10 p-2 pl-3 pr-3 underline  " : "text-amber-950 no-underline "} hover:cursor-pointer`}
                  onClick={() => {
                    setHelpContent("Multiplayer");
                  }}
                >
                  Multiplayer
                </span>
                <span
                  className={`${helpContent === "Game" ? "rounded-xl bg-black bg-opacity-10 p-2 pl-3 pr-3 underline  " : "text-amber-950 no-underline "} hover:cursor-pointer`}
                  onClick={() => {
                    setHelpContent("Game");
                  }}
                >
                  Game
                </span>
                <span
                  className={`${helpContent === "Study" ? "rounded-xl bg-black bg-opacity-10 p-2 pl-3 pr-3 underline  " : "text-amber-950 no-underline "} hover:cursor-pointer`}
                  onClick={() => {
                    setHelpContent("Study");
                  }}
                >
                  Study Room
                </span>

                {/* close button */}
                <div className=" absolute top-5% flex items-end justify-end">
                  <div
                    className="z-40 flex h-16 w-16 items-center justify-center rounded-2xl bg-black bg-[url('/backgrounds/blackBg.png')] bg-cover text-3xl text-white outline outline-white hover:cursor-pointer hover:bg-black hover:bg-[url('/backgrounds/whiteGrayBg.png')] hover:text-black hover:outline-black"
                    onClick={() => {
                      setShowHelpPopup(false);
                    }}
                  >
                    X
                  </div>
                </div>
              </div>
              {/* content */}
              <div className="h-full p-3">
                {/* About content */}
                {helpContent === "About" && (
                  <div>
                    <h1 className="rounded-xl bg-white bg-opacity-25 p-2 text-center text-amber-950">
                      What does f.i.s.h. stand for?
                    </h1>
                    <p className="m-3 flex items-center rounded-xl bg-amber-950 bg-opacity-10 text-center text-4xl">
                      f.i.s.h. - where the fun in socializing heightens! Is it
                      &apos;furry interactions in social havens&apos; or maybe
                      &apos;frolicking in silly humor&apos;? Dive into our ocean
                      of possibilities and find out if our furry friends are
                      really &apos;fellow creatures in social harmony&apos; or
                      just &apos;furious inhabitants sharing habitats.&apos;
                      It&apos;s a sea-cret we are ready to unleash.
                    </p>
                    <h1 className="rounded-xl bg-white bg-opacity-25 p-2 text-center text-amber-950">
                      What is f.i.s.h.?
                    </h1>
                    <p className="m-3 flex items-center rounded-xl bg-amber-950 bg-opacity-10 text-center text-4xl text-white">
                      f.i.s.h. is an interactive social game that blends gaming,
                      studying and socializing through cute animal characters.
                      On f.i.s.h., you can hangout on your friends&apos; habitats and
                      chat, play a multiplayer story-writing game, study with
                      your friends, and send mail!
                    </p>
                  </div>
                )}

                {/* multiplayer content */}
                {helpContent === "Multiplayer" && (
                  <div>
                    <h1 className="rounded-xl bg-white bg-opacity-25 p-1 text-center text-amber-950">
                      You can chat, play games, or study with your friends!
                    </h1>

                    <p className="m-3 flex items-center text-center text-4xl text-amber-900 underline">
                      How to invite friends to your Habitat:
                    </p>
                    <div className="rounded-xl bg-amber-950 bg-opacity-10">
                      <p className="m-3 flex items-center text-center text-4xl text-white">
                        1. Navigate to the Multiplayer Cloud or the Swan
                      </p>
                      <p className="m-3 flex items-center text-center text-4xl text-white">
                        2. Add your friends&apos; usernames to your Guest List
                      </p>
                      <p className="m-3 mb-8 flex items-center text-center text-4xl text-white">
                        3. Have your friends follow the instructions below
                      </p>
                    </div>
                    <p className="m-3 flex items-center text-center text-4xl text-amber-900 underline">
                      How to visit a friend&apos;s Habitat:
                    </p>
                    <div className="rounded-xl bg-amber-950 bg-opacity-10">
                      <p className="m-3 flex items-center text-center text-4xl text-white">
                        1. Make sure your friend has you on their Guest List
                      </p>
                      <p className="m-3 flex items-center text-center text-4xl text-white">
                        2. Navigate to the Multiplayer Cloud Tab or the Swan
                      </p>
                      <p className="m-3 flex items-center text-center text-4xl text-white">
                        3. Enter your friend&apos;s username and visit!
                      </p>
                    </div>
                  </div>
                )}
                {/* Game content */}
                {helpContent === "Game" && (
                  <div className="h-85% overflow-auto">
                    <h1 className="rounded-xl bg-white bg-opacity-25 p-2 text-center text-amber-950">
                      Play Sentence Symphony with friends!
                    </h1>
                    <p className="m-2 rounded-xl bg-amber-950 bg-opacity-10 text-center text-4xl text-white">
                      Collaboratively (or competitively) blend together a story
                      one sentence at a time. Each round, every player will
                      propose a sentence to add to the story. The most voted
                      response will be added to the story. Scroll down for more
                      details!
                    </p>
                    <div className="h-full">
                      <p className="m-3 flex items-center text-center text-5xl text-amber-900 underline">
                        How to play Sentence Symphony:
                      </p>
                      <div className="rounded-xl bg-amber-950 bg-opacity-10">
                        <p className="m-3 flex items-center text-4xl text-white">
                          1. You and your friends will try to collaboratively
                          write a story given a prompt or theme.
                        </p>
                        <p className="m-3 flex items-center text-4xl text-white">
                          2. During each round, everyone will be given 30
                          seconds to write a sentence.
                        </p>
                        <p className="m-3 flex items-center text-4xl text-white">
                          3. After each round, everyone will vote on their
                          favorite response and the most voted response will be
                          added to the story. You cannot vote for your own
                          responses!
                        </p>
                        <p className="m-3 flex items-center text-4xl text-white">
                          4. After 6 rounds, you will have your full story, and
                          you will be able to see who contributed the most!
                        </p>
                      </div>
                      <p className="m-3 flex items-center text-center text-5xl text-amber-900 underline">
                        How to start a game:
                      </p>
                      <div className="rounded-xl bg-amber-950 bg-opacity-10">
                        <p className="m-3 flex items-center text-4xl text-white">
                          1. To host a game, have all your friends visit your
                          Habitat &#40;maximum of 5 visitors&#41;
                        </p>
                        <p className="m-3 flex items-center rounded-xl bg-white bg-opacity-15 p-2 text-4xl text-amber-800">
                          IMPORTANT: Make sure all your friends are on your
                          Habitat before you start the game!
                        </p>
                        <p className="m-3 flex items-center text-4xl text-white">
                          2. Navigate to your house and start the game on your
                          T.V. --OR-- click on the Multiplayer Cloud Tab and
                          start the game from the popup
                        </p>
                        <p className="m-3 flex items-center rounded-xl bg-white bg-opacity-15 p-2 text-4xl text-amber-800">
                          NOTE: While you can play with just 1-2 players, it is
                          much more fun with 3+ players as you are not allowed
                          to vote for your own responses!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* studyroom content */}
                {helpContent === "Study" && (
                  <div>
                    <h1 className="rounded-xl bg-white bg-opacity-25 p-2 text-center text-amber-950">
                      Study with your friends!
                    </h1>
                    <p className="m-3 flex items-center rounded-xl bg-amber-950 bg-opacity-10 text-center text-4xl text-white">
                      Enjoy some relaxing music and time how long you study!
                      Invite some friends to your Habitat and study together!
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -z-10 h-5/6 w-3/4 rounded-3xl"></div>
          </div>
        )}
      </div>
    </div>
  );
}
