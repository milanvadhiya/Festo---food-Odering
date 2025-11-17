import React from "react";
import User from "./user";
import UserClass from "./userClass";
import UserClass2 from "./userclass2";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor!!");
  }

  componentDidMount() {
    console.log("componentDidCatch called from about page !!!");
  }

  render() {
    console.log("rendor is called from about page !!!");

    return (
      <div className="about-container max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10 space-y-6">
        <h1 className="about-title text-3xl font-bold text-gray-800 border-b pb-2">
          About Festo
        </h1>

        <p className="about-description text-gray-700 text-base leading-relaxed">
          Welcome to{" "}
          <strong className="text-green-600 font-semibold">Festo</strong> – your
          go-to app for discovering delicious food from top restaurants in your
          area. Whether you're craving spicy biryani, cheesy pizza, or fresh
          salads, we've got you covered!
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          Our mission is to make your food experience fast, fun, and flavorful.
          Built with <span className="text-red-500">❤️</span> using React, Festo
          is designed for food lovers who want variety, quality, and convenience
          all in one place.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          Explore menus, check reviews, and get your meals delivered in no time.
          We're constantly improving to serve you better.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          Thanks for choosing{" "}
          <span className="font-semibold text-green-600">Festo</span>. Let's
          eat!
        </p>

        <div className="pt-4 space-y-4">
          <User name={"Vadhiya Milan (functional)"} />
          <UserClass
            name={"first child (class-based component)"}
            location={"Junagadh"}
          />
          <UserClass
            name={"Second child (class-based component)"}
            location={"Sandha"}
          />
          <UserClass
            name={"third child (class-based component)"}
            location={"Patan"}
          />
          <UserClass2 name={"Milan Vadhiya"} location={"Patan"} />
        </div>
      </div>
    );
  }
}

export default About;
