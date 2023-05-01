const articles = [
  {
    name: "learn-react",
    title: "The Fastest Way to Learn React",
    content: [
      `When doing code reviews, developers rarely get enough time to truly understand each line of code 
      we’re reviewing.Instead, we have to quickly ponder the different situations where that code might fail.
            So every time I review code, I look for certain points to help me quickly understand the code.
            This article will help you understand how you can write better code, so that other developers c
            an better understand it. This article will give you a quick introduction to certain techniques 
            I use while designing my components, and show you how you can do the same.Note that we’ll
            stick mostly to ReactJS here, but that some of these points which may apply o using other 
            JavaScript libraries as well.`,
    ],
    name: "hooks",
    title: "React 18 All Hooks",
    content: [
      `In March 2022, the React team announced the official release of React 18. 
            This release came with a host of new features geared at performance improvement, 
            based on the concept of “concurrent rendering”.The idea behind concurrent 
            rendering is to make the process of rendering to the DOM interruptible.Among the new 
            features are five hooks: useId, useTransition, useDerredValue, useSyncExternalStore, 
            and useInsertionEffect.`,
    ],
    name: "node",
    title: "learn Node",
    content: [
      `Node.js is an open-source, cross-platform JavaScript runtime environment and library 
      for running web applications outside the client's browser. Ryan Dahl developed it in 2009, 
      and its latest iteration, version 15.14, was released in April 2021. 
      Developers use Node.js to create server-side web applications, and it is perfect 
      for data-intensive applications since it uses an asynchronous, event-driven model.`,
    ],
  },
];

export default articles;
