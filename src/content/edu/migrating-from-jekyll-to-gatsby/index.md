---
title: Migrating from Jekyll to Gatsby
publish: true
excerpt: The why and how of moving my personal blog site from Jekyll to Gatsby 
tags: portfolio, Jekyll, Gatsby, React
date: '2019-10-05'
---
After much hype, I recently migrated my [website](https://varundey.me) from Gatsby to Jekyll. This blog post is about why did I choose to migrate to Gatsby and what were the learnings along the way.

## Year 2015
This was a time when I was an undergrad student in college. I was a back-end developer working with Python and had little or close to no knowledge of how front-end web works. This was a time when the only JavaScript I knew was through jQuery and that too had a hard time dealing with. I could somehow make JavaScript work by copying snippets from StackOverflow but did not (want to) understand why JavaScript is behaving the way it is behaving. Needless to say I did not like working with JavaScript and tried to avoid as much as I could. I loved Python and wanted to use it everywhere.

## Year 2016
By this time, I started realising my naiveness and understood that Python can not be a solution for everything. There are certain problems that JavaScript solves well. During this time, I also needed a website as my portfolio to showcase my projects and interests for the oncoming placement season. I took this as an opportunity to learn JavaScript but soon realised that the scope of the entire project was just too big for me. I neither had an idea what my website should look nor had the expertise to build it. After much head banging, I found Jekyll - a simple ruby based static site generator. I started experimenting with it and found using it was super fun for me because I was already fluent with command line in my linux machine and I could associate Ruby gems and bundles with Python modules and pip. Also there were thousands of Jekyll based templates readily available. I liked [Material theme](https://github.com/lukas-h/material-theme) by [Lukas Himsel](https://himsel.me/) the best. I quickly forked the repo and built my own version of it. In this process, I also added few features to the original repo as part of [Hacktoberfest 2016](https://varundey.me/blog/hacktoberfest-2016/). My website was built and github-pages made it super easy to deploy because of it supporting Jekyll themes out of the box. Everything was good. I could easily add blog posts to my website and the build was reliable.

## Year 2017
It was difficult writing blogs after joining my first company as an intern. I was 100% dedicated solving problems for our users and solving their pain points. The company rewarded me well and I got a full time opportunity to work there. Time to update my website. Remember the reliable build system? Yeah that was thrown out of the window. I could not even build my own Github repo on my new machine. Digging into the errors, it seemed the package version had changed over the course of a year and Ruby's magical syntax was also not proving to be helpful. I cleansed Ruby out of my machine and reinstalled it again. The whole process made me tear my hair out but I somehow made it work hoping it should work here after now. Since I also wanted to learn JavaScript, I made a few front end side projects.

## Year 2018
I had started understanding the concepts of JavaScript and why it behaves the way it behaves. I also learnt React and was totally blown away by it. I wanted to use it for my website. But I had the same problem all over again. I did not have the UX expertise. But this time I knew where to look. Gatsby was the one framework I found which would suit my purpose. I tried experimenting with it but found it to be too cumbersome. I had to make the change cascade at different places to make something work and visible at all places. I did not experiment much with Gatsby hereafter. Meanwhile Jekyll was making me crazy with a new error message every time I wanted to update something. I just avoided updating my blog altogether.

## Year 2019
Things were this bad that I had to experiment in production for my website for a change to be reflected. I also [tweeted about it](https://twitter.com/AsDeyQuote/status/1162850241269227520). This was a breaking point for me. I wanted to move to a build system which is more reliable. I opened Gatsby again and started looking for a theme which would fit my needs and I found a nice looking [theme](https://github.com/prichey/prestonrichey.com) by [Preston Richey](https://prestonrichey.com/). I spent few hours understanding the flow and updating the source code according to me. This time Netlify helped me with deploying my new website to my domain.

I now have my website built on React and the data being served as GraphQL queries but I still can't find a way to show my other repositories as pages to my domain. Hoping this won't be a breaking point again this time. ✌️
