import React from "react";

const Statistic = () => {
  return (
    <section class="text-blueGray-700 ">
      <div class="container items-center px-5 py-8 mx-auto lg:px-24">
        <div class="flex flex-wrap mb-12 text-left">
          <div class="w-full p-4 mx-auto lg:w-1/3">
            <div class="p-4 lg:p-8 rounded-xl bg-blueGray-50">
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                {" "}
                Short length headline.{" "}
              </h1>
              <p class="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                You're about to launch soon and must be 100% focused on your
                product. Don't loose precious days designing, coding the landing
                page and testing .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
