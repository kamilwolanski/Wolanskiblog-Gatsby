import React from "react";
const createDataLayer = () => ({
  __html: "window.dataLayer = window.dataLayer || []",
});
const optimizeAntiFlickerStyle = () => ({
  __html: ".async-hide { opacity: 0 !important}",
});
const optimizeAntiFlickerScript = (containerId) => ({
  __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{OPT-W5XTX9R:true});`,
});
const customHeadComponents = [
  <script dangerouslySetInnerHTML={createDataLayer()} />,
  <style dangerouslySetInnerHTML={optimizeAntiFlickerStyle()} />,
  <script dangerouslySetInnerHTML={optimizeAntiFlickerScript('OPT-W5XTX9R')} />,
];
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const mergedHeadComponents = [
    ...customHeadComponents,
    ...getHeadComponents(),
  ];
  replaceHeadComponents(mergedHeadComponents);
};