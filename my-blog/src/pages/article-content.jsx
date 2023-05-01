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
            JavaScript libraries as well.
            Tip #1: Always use prop-types to define all the props in your components
            prop-types is runtime type checking for React props and similar objects.prop-types 
            will help you check if the desired type of prop is getting passed into your component or not.
            If the proper type of a specific prop is not passed into your component, 
            then the package will throw a warning in the console of your browser.`,
    ],
    name: "learn-hooks",
    title: "React 18 All Hooks",
    content: [
      `In March 2022, the React team announced the official release of React 18. 
            This release came with a host of new features geared at performance improvement, 
            based on the concept of “concurrent rendering”.The idea behind concurrent 
            rendering is to make the process of rendering to the DOM interruptible.Among the new 
            features are five hooks: useId, useTransition, useDerredValue, useSyncExternalStore, 
            and useInsertionEffect.`,
    ],
  },
];

export default articles;
