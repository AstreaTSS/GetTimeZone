let date=Date.now();const shortDTFormat=new Intl.DateTimeFormat([],{timeZoneName:"short"}),offsetNameFormat=shortDTFormat.formatToParts(date).find((e=>"timezonename"===e.type.toLowerCase())),offsetName=offsetNameFormat.value;document.getElementById("timezone_text").innerText="Your time zone is: "+offsetName;const longDTFormat=new Intl.DateTimeFormat([],{timeZoneName:"long"}),longOffsetNameFormat=longDTFormat.formatToParts(date).find((e=>"timezonename"===e.type.toLowerCase())),longOffsetName=longOffsetNameFormat.value;document.getElementById("fullname_text").innerText="Full name: "+longOffsetName;const zoneName=shortDTFormat.resolvedOptions().timeZone;var temp_link=document.createElement("a");temp_link.href="https://www.iana.org/time-zones",temp_link.target="_blank",temp_link.innerHTML="IANA",document.getElementById("othername_text").innerHTML=temp_link.outerHTML+" name: "+zoneName;
