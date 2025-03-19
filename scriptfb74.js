var AttachmentArray=[];var filesCounterAlertStatus=false;var ul=document.createElement("ul");ul.className="thumb-Images";ul.id="imgList";var dropZone=document.body;var pdfinp=document.getElementById('files');if(typeof xlang==='undefined'){var xlang='en'
var xcomp="Compressing"}
else{var xcomp="Mengompresi"}
dropZone.addEventListener('dragover',function(e){e.stopPropagation();e.preventDefault();e.dataTransfer.dropEffect='copy';});function generateUniqueId(){const randomNumber=Math.random().toString(36).substr(2,9);const timestamp=Date.now().toString(36);const uniqueId=`I${randomNumber}${timestamp}`;return uniqueId;}
function makefileso(files,ix=false){if(ix==false)ix=0
if(!files[ix]){pdfinp.value=''
return false}
var reader=new FileReader();let file=files[ix]
reader.onload=async function(readerEvt){var count=0;let action=typeof xpage=='undefined'?'compress':'convert'
try{count=reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;}
catch{}
if(Number.isInteger(count)){if(count!=0&&action=='compress'){var kbsl=parseInt(Number(document.getElementById("kbid").value))
if(typeof inmb=='boolean'){kbsl=kbsl*1000}
document.querySelector('#otherbuttons > p:first-child').innerHTML=`<b> Tip:- </b> The recommended size is ${count*60} KB for the best quality PDF <span class='dynamicupsize'>~ ${kbsl}Kb = ${(kbsl/1024).toFixed(1)}MB</span>`}
if(AttachmentArray.length>1&&action=='compress'){document.querySelector('#otherbuttons > p:first-child').innerHTML=``}
var li=document.createElement("li");ul.appendChild(li);let uid=generateUniqueId();li.id=uid;li.innerHTML=`
        <div class="img-wrap"> <span nid="${uid}" class="close">&times;</span>
        <center>
           <img class="thumb" src="/static/img/pdfic.svg" title="${escape(readerEvt.target.fileName)}"/>
           <span class='sizepdf'>${size}MB</span>
        </center>
        </div>`
var div=document.createElement("div");div.className="FileNameCaptionStyle";li.appendChild(div);div.innerHTML=[readerEvt.target.fileName].join("");document.getElementById("Filelist").insertBefore(ul,null);readerEvt.target.file.uid=uid
AttachmentArray.push(readerEvt.target.file)
document.querySelectorAll('.notext').forEach(el=>el.classList.add('hide'));ix++;makefileso(files,ix)}}
if(file.type.match(/pdf.*/)){size=(file.size/1000000).toFixed(1)
if(size>300){alert('Maximum Limit To Upload PDF Is 300 MB :)')
return false;}
if(AttachmentArray.length>2){alert('You Can Compress 3 PDFs At Once :)')
return false;}
reader.fileName=file.name
reader.file=file
reader.readAsBinaryString(file);}}
try{if(typeof xpage=='undefined'&&typeof inmb=='undefined'){document.getElementById("kbid").addEventListener('keyup',function(){var kbsl=parseInt(document.getElementById("kbid").value)
$('.dynamicupsize').innerHTML=`~ ${kbsl}Kb = ${(kbsl/1024).toFixed(1)}MB`});}
pdfinp.addEventListener('change',function(){makefileso(pdfinp.files);});}
catch{}
dropZone.addEventListener('drop',function(e){e.stopPropagation();e.preventDefault();var files=e.dataTransfer.files;makefileso(files);});function calculateSize(img,maxWidth,maxHeight){let width=img.width;let height=img.height;if(width>height){if(width>maxWidth){height=Math.round((height*maxWidth)/width);width=maxWidth;}}else{if(height>maxHeight){width=Math.round((width*maxHeight)/height);height=maxHeight;}}
return[width,height];}
function make_prvSettles(){$('.hideafetr').removeClass('hide')
document.querySelector(".loaddiv").classList.remove("hide");$('#squareadmob').html(`
    <div class="artiad"><div class="adconttaim"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8418789035128205" data-ad-slot="5943448165" data-ad-format="auto" data-full-width-responsive="true"></ins></div></div>
    <script>setTimeout(() => {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }, 1000);</script>
  `)
$('.pdfmaintxcontd').html(`<script>
  $('.pdfmaintxcontd').unbind()
  $('.pdfmaintxcontd').on('input','.filenamenew',function(){
    let fname = 'Pi7_PDF_Tool'
    if($(this).val().trim() != '')fname=$(this).val().trim()
    $(this).parent().parent().find('.filnn').text(fname+'.pdf')
    $(this).parent().parent().find('.compressbtn').attr('download',fname+'.pdf')
  })     
  </script>`)}
async function getSize(img_sx){let wsize,hsize;if(img_sx<15){[wsize,hsize]=[350,550];}else if(img_sx<=35){let ratio=(img_sx-15)/(35-15);wsize=350+ratio*(550-350);hsize=550+ratio*(850-550);}else if(img_sx<=50){let ratio=(img_sx-35)/(50-35);wsize=550+ratio*(750-550);hsize=850+ratio*(1150-850);}else if(img_sx<=100){let ratio=(img_sx-50)/(100-50);wsize=750+ratio*(1250-750);hsize=1150+ratio*(1750-1150);}else if(img_sx<=200){let ratio=(img_sx-100)/(200-100);wsize=1250+ratio*(1750-1250);hsize=1750+ratio*(2350-1750);}else{[wsize,hsize]=[1800,2400];}
return[Math.round(wsize),Math.round(hsize)]}
async function CompressFILES(){let reqsize=parseInt(Number($('#kbid').val()));if(typeof inmb=='boolean'){reqsize=reqsize*1000}
reqsize-=2
if(isNaN(reqsize)){alert('Please Enter A Size In KB')
return false}
if(AttachmentArray.length==0){alert("No PDF Selected");return false;}
make_prvSettles()
for(xpdf of AttachmentArray){const mergedPdf=await PDFLib.PDFDocument.create();async function addImageToPDF(imageFile){const imageBytes=new Uint8Array(await imageFile.arrayBuffer());const image=await mergedPdf.embedJpg(imageBytes);const page=mergedPdf.addPage([image.width,image.height]);const{width,height}=page.getSize();page.drawImage(image,{x:0,y:0,width:image.width,height:image.height});return true;}
async function stopreaderawair(){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=async function(event){const typedArray=new Uint8Array(event.target.result);$('#messages1').html(`Reading PDF <b>${xpdf.name}</b>`)
const pdf=await pdfjsLib.getDocument(typedArray).promise;const numPages=pdf.numPages;xpdf.numPages=numPages
let img_sx=reqsize/numPages;if(img_sx<18)img_sx=20
let[wszize,hszize]=await getSize(img_sx)
console.log(wszize,hszize,img_sx)
var canvases=[]
for(let pageNumber=1;pageNumber<=numPages;pageNumber++){$('#messages1').html(`Processing <b>${xpdf.name} (${numPages} ${numPages > 1 ? 'Pages' : 'Page'})</b><p style='margin-top: 9px'> Processing Page ${pageNumber} (<b>${parseInt((pageNumber * 100)/numPages)}%</b>)</p>`)
const page=await pdf.getPage(pageNumber);var viewport=page.getViewport({scale:1});var scale=Math.min(wszize/viewport.width,hszize/viewport.height);viewport=page.getViewport({scale:scale});let[newWidth,newHeight]=calculateSize(viewport,wszize,hszize);const canvas=document.createElement('canvas');const context=canvas.getContext('2d');canvas.height=newHeight;canvas.width=newWidth;let renderContext={canvasContext:context,viewport:viewport};await page.render(renderContext).promise;canvases.push(canvas)}
async function compressAndResizeCanvases(maxTotalSizeMB){const maxTotalSizeBytes=maxTotalSizeMB*1024;let totalSize=0;const compressedImages=[];let quality=0.9;let resizeFactor=0;let maxdim=Math.min(Math.min(...canvases.map(c=>c.width)),Math.min(...canvases.map(c=>c.height)))
while(totalSize>maxTotalSizeBytes||resizeFactor<=maxdim){totalSize=0;compressedImages.length=0;for(let i=0;i<canvases.length;i++){let resizedCanvas;if(resizeFactor>0){const canvas=canvases[i];resizedCanvas=document.createElement('canvas');resizedCanvas.width=canvas.width-resizeFactor;resizedCanvas.height=canvas.height-resizeFactor;const ctx=resizedCanvas.getContext('2d');ctx.drawImage(canvas,0,0,resizedCanvas.width,resizedCanvas.height);}
else resizedCanvas=canvases[i]
let blob=await new Promise(resolve=>resizedCanvas.toBlob(resolve,'image/jpeg',quality));compressedImages.push(blob);totalSize+=blob.size;}
if(totalSize>maxTotalSizeBytes){resizeFactor+=40;if(quality>0.3)quality-=0.1;}else break;}
return compressedImages;}
if(reqsize<(6*numPages))reqsize=(6*numPages)
for(x of await compressAndResizeCanvases(reqsize)){await addImageToPDF(x)}
resolve(pdf)}
reader.readAsArrayBuffer(xpdf);})}
await stopreaderawair()
const mergedPdfBytes=await mergedPdf.save();let MERGEDBlob=new Blob([mergedPdfBytes],{type:'application/pdf'})
let ovxsize=(reqsize-(MERGEDBlob.size/1024)-2)
if(ovxsize>0)MERGEDBlob=addEmptyBytesToBlob(MERGEDBlob,ovxsize*1024);let wrn_msg=''
if((MERGEDBlob.size/1024)>reqsize+2){wrn_msg=`<p style='font-size:14px'><img src="/static/img/svgs/error.svg" width="20px"> </br>We Can Compress 1 Page Upto 30kb. Recommended Size is <b>${readableBytes((xpdf.numPages*60)*1024)}</b> For This PDF.</p> <span onclick="$('.loaddiv').addClass('hide');$('#kbid').focus()"  class='btncmxtypebt'>Change Size</span>`}
$('.pdfmaintxcontd').append(`
      <div class="c_paddownloadpg">
            <img src="/static/img/pdfic.svg" width="70px">
            <div class="filnn">${xpdf.name}</div>
            <div class="size">Size:- ${readableBytes(MERGEDBlob.size)}</div>
            <div class="renamefiled">Rename PDF:-<br><input class="filenamenew"></div>
            <a class="compressbtn" download="${xpdf.name}" href="${window.URL.createObjectURL(MERGEDBlob)}">Download</a>
            ${wrn_msg}
      </div>
    `)}
$('.pdfmaintxcontd').append(`<center style='display: block;width: 100%;' class="makenewmrg"></br><span class="xtypebt" href="#" onclick="window.location.reload()">Compress New PDFs</span></center>`)
$('.hideafetr').addClass('hide')}
function createEmptyBlob(sizeInBytes){const buffer=new ArrayBuffer(sizeInBytes);return new Blob([buffer],{type:'application/octet-stream'});}
function addEmptyBytesToBlob(blob,additionalSizeInBytes){const emptyBlob=createEmptyBlob(additionalSizeInBytes);return new Blob([blob,emptyBlob]);}
function readableBytes(nsize){var sizes=['Bytes','KB','MB','GB','TB'];if(nsize==0)return'0 Byte';var i=parseInt(Math.floor(Math.log(nsize)/Math.log(1024)));return Math.round(nsize/Math.pow(1024,i),2)+' '+sizes[i];}
if(document.querySelector("#files")!==null){document.querySelector('#Filelist').addEventListener('click',function(event){if(event.target.className==='close'){let el=event.target;AttachmentArray=AttachmentArray.filter(item=>item.uid!==el.getAttribute('nid'))
document.getElementById(el.getAttribute('nid')).remove()
if(AttachmentArray.length==0){document.querySelectorAll('.notext').forEach(el=>el.classList.remove('hide'));document.getElementById('imgList').remove()}
event.preventDefault()}});}
function sendData(data,uri='/submitsuggestion'){const XHR=new XMLHttpRequest();const urlEncodedDataPairs=[];for(const[name,value]of Object.entries(data)){urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);}
const urlEncodedData=urlEncodedDataPairs.join('&').replace(/%20/g,'+');XHR.addEventListener('load',(event)=>{});XHR.addEventListener('error',(event)=>{alert('Oops! Something went wrong.');});XHR.open('POST',uri);XHR.setRequestHeader('Content-Type','application/x-www-form-urlencoded');XHR.send(urlEncodedData);}
$('#subformbt').addEventListener('click',function(e){let em=document.querySelector('.emailinp');let sgbox=document.querySelector('.sugbox');if(sgbox.value==''){alert('Please Write A Feedback.');return false;}
function benchmark(func,iterations){var start=performance.now();for(var i=0;i<iterations;i++){func();}
var end=performance.now();return end-start;}
function myFunction(){for(var i=0;i<1000000;i++){}}
var iterations=50;var timeTaken=benchmark(myFunction,iterations);sendData({em:em.value,sg:sgbox.value,uri:`${location.href} -- ${timeTaken.toFixed(2)}`})
alert('Thankyou, Your Feedback Is Valuable For Us');em.value='';sgbox.value='';})
function $(sid){return document.querySelector(sid)}
function getid(sid){return document.getElementById(sid)}
function tooglemenu(x){x.classList.toggle("change");document.querySelector('.navlinks').classList.toggle('mobnav')}
const links=document.querySelectorAll('.share a');function onClick(event){event.preventDefault();window.open(event.currentTarget.href,'Pi7 PDF Tool','width=600,height=500,location=no,menubar=no,toolbar=no');}
links.forEach((link)=>{var url=encodeURIComponent(window.location.origin+window.location.pathname);var title=encodeURIComponent(document.title);if(url.includes('download-compress-pdf')){url=encodeURIComponent('https://pdf.pi7.org/')
var title=encodeURIComponent('Pi7 PDF Tool');}
link.href=link.href.replace('{url}',url).replace('{title}',title);link.addEventListener('click',onClick);});function loadJS(FILE_URL,async=true,adload=false){let scriptEle=document.createElement("script");scriptEle.setAttribute("src",FILE_URL);scriptEle.setAttribute("type","text/javascript");scriptEle.setAttribute("async",async);if(FILE_URL.includes('://'))scriptEle.setAttribute("crossorigin",'anonymous');if(FILE_URL.includes('.mjs')){scriptEle.setAttribute("type",'module');scriptEle.setAttribute("crossorigin",'anonymous');}
document.body.appendChild(scriptEle);scriptEle.addEventListener("load",()=>{if(adload)gana()
if(FILE_URL.includes('pdf.mjs'))pdfjsLib.GlobalWorkerOptions.workerSrc='/static/js/pdf.worker.mjs';if(FILE_URL.includes('jquery')&&$('#otherbuttons').length)$('#otherbuttons').prepend(document.createElement("p"))});scriptEle.addEventListener("error",(ev)=>{console.log("Error on loading file",ev);});}
var loadad=true;window.onload=function(){$('.mainsec').addEventListener('touchstart',function(){if(loadad)if(loadad)loadXfiles()},{passive:true})
$('.mainsec').addEventListener('mouseover',(e)=>{if(loadad)loadXfiles()})}
function loadXfiles(){loadad=false;loadJS('/static/js/pdf.mjs',true)
loadJS("/static/js/jquery-3.6.3.slim.min.js",true);loadJS("https://apis.google.com/js/platform.js",true);loadJS('/static/js/pdf-lib.min.js',true)
if(!location.href.includes('127.')){loadJS("https://www.googletagmanager.com/gtag/js?id=G-MHFYDB3BZ1",true);loadJS("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8418789035128205",true,true);}}
function gana(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','G-MHFYDB3BZ1');if(window.screen.width>900){document.querySelector('#sidebarxad').insertAdjacentHTML('afterbegin','<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8418789035128205" data-ad-slot="7200442713" data-ad-format="auto" data-full-width-responsive="true"></ins>')
setTimeout(function(){(adsbygoogle=window.adsbygoogle||[]).push({});},4000)}
if(document.querySelector('#files'))setTimeout(function(){(adsbygoogle=window.adsbygoogle||[]).push({});},1000)}
if(typeof inmb=='boolean'){document.querySelector('.kbinput').innerHTML='MB'}