//重定向浏览器地址，防止长链接
pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function(responseText, request, href, options){
  Object.defineProperty(request,'responseURL',{
    value: href
  });
  pjax.site_handleResponse(responseText,request,href,options);
}