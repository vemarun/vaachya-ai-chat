/* eslint-disable @next/next/no-img-element */
"use client";

export default function Home() {
  return (
    <>
      <div className="flex flex-row w-10/12 h-screen">
        <div className=" flex items-center justify-center self-center h-full border-r m-5">
          <h1 className="text-5xl font-bold m-5">Vaachya Chat</h1>
        </div>
        <div className="flex-1 w-6/12 card bg-base-300 rounded-box p-5">
          <div className="chat-container overflow-y-scroll h-[85vh]">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="user.png"
                  />
                </div>
              </div>
              <div className="chat-header">
                User
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">Hello i need some help!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="bot.png" />
                </div>
              </div>
              <div className="chat-header">
                Bot
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">
                Hello, Welcome to Z Bank self service chat? Please select from
                following options
                <br />
                <button className="btn btn-xs mb-1">
                  Balance Enquiry
                </button>{" "}
                <br />
                <button className="btn btn-xs mb-1">
                  Transaction Enquiry
                </button>{" "}
                <br />
                <button className="btn btn-xs mb-1">Loan Services</button>{" "}
                <br />
                <button className="btn btn-xs mb-1">
                  Card Related Enquiry
                </button>{" "}
                <br />
                <button className="btn btn-xs mb-1">
                  Other Services{" "}
                </button>{" "}
                <br />
                <button className="btn btn-xs mb-1">
                  Talk to live support
                </button>{" "}
                <br />
              </div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>
          <div className="s-bottom mb-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered mr-2 flex-grow"
            />
            <button className="btn btn-primary btn-md">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
