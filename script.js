var hint = null; 
function screenie() {
	var s1 = "<HTML><HEAD><TITLE>"+map+"</TITLE></HEAD><BODY topmargin='0' leftmargin='0'><img width='850' height='750' src='" +kuva+ ".jpg'alt='Click to Close' onClick='self.close()'> \n </BODY></HTML>\n";
	if (!hint || hint.closed)
		hint = window.open("", "Lennosta", "width=850, height=750, top=0, left=100, resizeable=no,");
	else
		hint.focus();
	hint.document.open();
	hint.document.write(s1);
	hint.document.close();
}

function AC()
{
	var s2 = "<HTML><HEAD><TITLE>"+map+"</TITLE></HEAD><BODY topmargin='0' leftmargin='0' background='taustavari.jpg'><CENTER><H1>"+map+"</H1><B>"+text+"<BR><IMG SRC='"+kuva+".jpg' HEIGHT='300'><BR>"+text2+" \n </B></CENTER></BODY></HTML>\n";
	if (!hint || hint.closed)
		hint = window.open("", "Lennosta", "width=900, height=700, top=10, left=100, resizable=yes");
	else
	hint.focus();
	hint.document.open();
	hint.document.write(s2);
	hint.document.close();
}