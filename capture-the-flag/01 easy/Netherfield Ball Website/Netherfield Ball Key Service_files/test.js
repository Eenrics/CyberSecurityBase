// Enigmas I, M3, M4, D, K, KD, N, R, S, T, A-865, G-111, G-260, G-312, maintenance wheel, custom configuration

// === Declaration of variables ===
// --- Equipment ---
var models= 16, ukws= 15, wheels= 49, etws= 3; // for menus + arrays
// Modell presets (hashes: binary numbers, sum of 2^(menu_item#) for all active items)
var m = new Array(models);
for (var i=0; i<=models; i++)
  m[i]= new Object("mod","mech","etwhash","ukwhash","uset","urot","w1st","wlast","stk");

m[0].mod='custom'; m[0].mech=false; m[0].etw=0; m[0].ukwhash= Math.pow(2,ukws +1)-1; 
m[0].uset=true; m[0].urot=false; m[0].w1st=0; m[0].wlast=wheels -1; m[0].stk=true;

m[1].mod='Arb.W'; m[1].mech=false; m[1].etw=1; m[1].ukwhash=1;
m[1].uset=false; m[1].urot=false; m[1].w1st=0; m[1].wlast=0; m[1].stk=false;

m[2].mod='I'; m[2].mech=false; m[2].etw=1; m[2].ukwhash=38;
m[2].uset=false; m[2].urot=false; m[2].w1st=1; m[2].wlast=5; m[2].stk=true;

m[3].mod='M3'; m[3].mech=false; m[3].etw=1; m[3].ukwhash=292;
m[3].uset=false; m[3].urot=false; m[3].w1st=1; m[3].wlast=8; m[3].stk=true;

m[4].mod='M4'; m[4].mech=false; m[4].etw=1; m[4].ukwhash=472;
m[4].uset=true; m[4].urot=false; m[4].w1st=1; m[4].wlast=8; m[4].stk=true;

m[5].mod='N'; m[5].mech=false; m[5].etw=1; m[5].ukwhash=2048;
m[5].uset=false; m[5].urot=false; m[5].w1st=9; m[5].wlast=13; m[5].stk=true;

m[6].mod='S'; m[6].mech=false; m[6].etw=1; m[6].ukwhash=8192;
m[6].uset=false; m[6].urot=false; m[6].w1st=14; m[6].wlast=16; m[6].stk=true;

m[7].mod='D'; m[7].mech=false; m[7].etw=2; m[7].ukwhash=1024;
m[7].uset=true; m[7].urot=false; m[7].w1st=17; m[7].wlast=19; m[7].stk=false;

m[8].mod='K'; m[8].mech=false; m[8].etw=2; m[8].ukwhash=1024;
m[8].uset=true; m[8].urot=false; m[8].w1st=20; m[8].wlast=22; m[8].stk=false;

m[9].mod='R'; m[9].mech=false; m[9].etw=2; m[9].ukwhash=4096;
m[9].uset=true; m[9].urot=false; m[9].w1st=23; m[9].wlast=25; m[9].stk=false;

m[10].mod='T'; m[10].mech=false; m[10].etw=3; m[10].ukwhash=16384;
m[10].uset=true; m[10].urot=false; m[10].w1st=26; m[10].wlast=33; m[10].stk=false;

m[11].mod='KD'; m[11].mech=false; m[11].etw=2; m[11].ukwhash=256;
m[11].uset=false; m[11].urot=false; m[11].w1st=34; m[11].wlast=36; m[11].stk=false;

m[12].mod='A-865'; m[12].mech=true; m[12].etw=2; m[12].ukwhash=1024;
m[12].uset=true; m[12].urot=true; m[12].w1st=37; m[12].wlast=39; m[12].stk=false;

m[13].mod='G-111'; m[13].mech=true; m[13].etw=2; m[13].ukwhash=1024;
m[13].uset=true; m[13].urot=true; m[13].w1st=40; m[13].wlast=42; m[13].stk=false;

m[14].mod='G-260'; m[14].mech=true; m[14].etw=2; m[14].ukwhash=1024;
m[14].uset=true; m[14].urot=true; m[14].w1st=43; m[14].wlast=45; m[14].stk=false;

m[15].mod='G-312'; m[15].mech=true; m[15].etw=2; m[15].ukwhash=512;
m[15].uset=true; m[15].urot=true; m[15].w1st=46; m[15].wlast=48; m[15].stk=false;

// --- Constants ---
var abc            = 'abcdefghijklmnopqrstuvwxyz'; // ordered Alphabet
//Rotor wheels (wiring, turnover points, t/o info, name)
var walze = new Array(wheels);
// "Arb.W" (Maintenance wheel; no permutation, 26 notches)
walze[0] = new Array(abc, abc, 'Arb.W (Maintenance wheel): pass-through; 26 notches', '='); 
// I-VIII (I,M3,M4)
walze[1] = new Array('ekmflgdqvzntowyhxuspaibrcj', 'q', 'Q|R', 'I');
walze[2] = new Array('ajdksiruxblhwtmcqgznpyfvoe', 'e', 'E|F', 'II');
walze[3] = new Array('bdfhjlcprtxvznyeiwgakmusqo', 'v', 'V|W', 'III');
walze[4] = new Array('esovpzjayquirhxlnftgkdcmwb', 'j', 'J|K', 'IV');
walze[5] = new Array('vzbrgityupsdnhlxawmjqofeck', 'z', 'Z|A', 'V');
walze[6] = new Array('jpgvoumfyqbenhzrdkasxlictw', 'zm', 'Z|A, M|N', 'VI');
walze[7] = new Array('nzjhgrcxmyswboufaivlpekqdt', 'zm', 'Z|A, M|N', 'VII');
walze[8] = new Array('fkqhtlxocbjspdzramewniuygv', 'zm', 'Z|A, M|N', 'VIII');
// I-V (N)
walze[9] = new Array('wtokasuyvrbxjhqcpzefmdinlg', 'q', 'Q|R', '1N');
walze[10]= new Array('gjlpubswemctqvhxaofzdrkyni', 'e', 'E|F', '2N');
walze[11]= new Array('jwfmhnbpusdytixvzgrqlaoekc', 'v', 'V|W', '3N');
walze[12]= new Array('esovpzjayquirhxlnftgkdcmwb', 'j', 'J|K', '4N');
walze[13]= new Array('hejxqotzbvfdascilwpgynmurk', 'z', 'Z|A', '5N');
// I-III (S)
walze[14]= new Array('veosirzujdqckgwypnxaflthmb', 'q', 'Q|R', '1S');
walze[15]= new Array('uemoatqlshpkcyfwjzbgvxindr', 'e', 'E|F', '2S');
walze[16]= new Array('tzhxmbsipnurjfdkeqvcwglaoy', 'v', 'V|W', '3S');
// I-III (D)
walze[17]= new Array('lpgszmhaeoqkvxrfybutnicjdw', 'y', 'Y|Z', '1D');
walze[18]= new Array('slvgbtfxjqohewirzyamkpcndu', 'e', 'E|F', '2D');
walze[19]= new Array('cjgdpshkturawzxfmynqobvlie', 'n', 'N|O', '3D');
// I-III (K)
walze[20]= new Array('pezuohxscvfmtbglrinqjwaydk', 'y', 'Y|Z', '1K');
walze[21]= new Array('zouesydkfwpciqxhmvblgnjrat', 'e', 'E|F', '2K');
walze[22]= new Array('ehrvxgaobqusimzflynwktpdjc', 'n', 'N|O', '3K');
// I-III (R)
walze[23]= new Array('jgdqoxuscamifrvtpnewkblzyh', 'n', 'N|O', '1R');
walze[24]= new Array('ntzpsfbokmwrcjdivlaeyuxhgq', 'e', 'E|F', '2R');
walze[25]= new Array('jviubhtcdyakeqzposgxnrmwfl', 'y', 'Y|Z', '3R');
// I-VIII (T)
walze[26]= new Array('kptyuelocvgrfqdanjmbswhzxi', 'wzekq', '5 notches', '1T');
walze[27]= new Array('uphzlweqmtdjxcaksoigvbyfnr', 'wzflr', '5 notches', '2T');
walze[28]= new Array('qudlyrfekonvzaxwhmgpjbsict', 'wzekq', '5 notches', '3T');
walze[29]= new Array('ciwtbkxnrespflydagvhquojzm', 'wzflr', '5 notches', '4T');
walze[30]= new Array('uaxgisnjbverdylfzwtpckohmq', 'ycfkr', '5 notches', '5T');
walze[31]= new Array('xfuzgalvhcnysewqtdmrbkpioj', 'xeimq', '5 notches', '6T');
walze[32]= new Array('bjvftxplnayozikwgdqeruchsm', 'ycfkr', '5 notches', '7T');
walze[33]= new Array('ymtpnzhwkodajxeluqvgcbisfr', 'xeimq', '5 notches', '8T');
// I-VIII (KD)
walze[34]= new Array('veziojcxkyduntwaplqgbhsfmr', 'suyaehlnq', '9 notches', '1KD');
walze[35]= new Array('hgrbsjzetdlvpmqycxaokinfuw', 'suyaehlnq', '9 notches', '2KD');
walze[36]= new Array('nwlhxgrbyojsazdvtpkfqmeuic', 'suyaehlnq', '9 notches', '3KD');
// I-III (A) [A-865]
walze[37]= new Array('lpgszmhaeoqkvxrfybutnicjdw', 'suvwzabcefgiklopq', '17 notches (A-865)', '1A8');
walze[38]= new Array('slvgbtfxjqohewirzyamkpcndu', 'stvyzacdfghkmnq', '15 notches (A-865)', '2A8');
walze[39]= new Array('cjgdpshkturawzxfmynqobvlie', 'uwxaefhkmnr', '11 notches (A-865)', '3A8');
// I-III (G1) [G-111]
walze[40]= new Array('wlrhbqundkjczsexotmagyfpvi', 'suvwzabcefgiklopq', '17 notches (G-111)', '1G1');
walze[41]= new Array('tfjqazwmhlcuixrdygoevbnskp', 'stvyzacdfghkmnq', '15 notches (G-111)', '2G1');
walze[42]= new Array('qtpixwvdfrmusljohcanezkybg', 'swzfhmq', '7 notches (G-111)', '5G1');
// I-III (G2) [G-260]
walze[43]= new Array('rcspblkqaumhwytifzvgojnexd', 'suvwzabcefgiklopq', '17 notches (G-260)', '1G2');
walze[44]= new Array('wcmibvpjxarosgndlzkeyhufqt', 'stvyzacdfghkmnq', '15 notches (G-260)', '2G2');
walze[45]= new Array('fvdhzelsqmaxokyiwpgcbujtnr', 'uwxaefhkmnr', '11 notches (G-260)', '3G2');
// I-III (G3) [G-312]
walze[46]= new Array('dmtwsilruyqnkfejcazbpgxohv', 'suvwzabcefgiklopq', '17 notches (G-312)', '1G3');
walze[47]= new Array('hqzgpjtmoblncifdyawveusrkx', 'stvyzacdfghkmnq', '15 notches (G-312)', '2G3');
walze[48]= new Array('uqntlszfmrehdpxkibvygjcwoa', 'uwxaefhkmnr', '11 notches (G-312)', '3G3');

//Reflectors (UKW); Greek wheels; entry wheels
var ukw = new Array(ukws);
ukw[0] = new Array('onvsrgfjuhpmlbakwedzicqyxt', 'X', 'Maintenance reflector (swaps adjacent keys)');
ukw[1] = new Array('ejmzalyxvbwfcrquontspikhgd', 'A', 'UKW A');
ukw[2] = new Array('yruhqsldpxngokmiebfzcwvjat', 'B', 'UKW B');
ukw[3] = new Array('', 'B.&beta;', 'UKW B(thin) + \'Beta\''); //(M4: wiring see below)
ukw[4] = new Array('', 'B.&gamma;', 'UKW B(thin) + \'Gamma\'');
ukw[5] = new Array('fvpjiaoyedrzxwgctkuqsbnmhl', 'C', 'UKW C');
ukw[6] = new Array('', 'C.&beta;', 'UKW C(thin) + \'Beta\'');
ukw[7] = new Array('', 'C.&gamma;', 'UKW C(thin) + \'Gamma\'');
ukw[8] = new Array('', 'D*', 'UKW D [*rewirable]'); //(wiring: see below: udpairs*)
ukw[9] = new Array('rulqmzjsygocetkwdahnbxpvif', 'uG', 'UKW(G)');
ukw[10]= new Array('imetcgfraysqbzxwlhkdvupojn', 'u$', 'UKW(commercial)');
ukw[11]= new Array('mowjypuxndsraibfvlkzgqchet', 'uN', 'UKW(N)');
ukw[12]= new Array('qyhognecvpuztfdjaxwmkisrbl', 'uR', 'UKW(R)');
ukw[13]= new Array('ciagsndrbytpzfulvhekoqxwjm', 'uS', 'UKW(S)');
ukw[14]= new Array('gekpbtaumocniljdxzyfhwvqsr', 'uT', 'UKW(T)');
// (M4):
var ukbduenn  = 'enkqauywjicopblmdxzvfthrgs'; // UKW B "thin"
var ukcduenn  = 'rdobjntkvehmlfcwzaxgyipsuq'; // UKW C "thin"
var walzebeta = 'leyjvcnixwpbqmdrtakzgfuhos'; // Beta
var walzegamma= 'fsokanuerhmbtiycwlqpzxvgjd'; // Gamma
// UKW D:
var udlabels = 'a-zxwvutsrqpon-mlkihgfedcb'; // UKW-D contact labels w.r.t. BP-style (=abc)
var upairs= new Array(6); // Presets (orig. key format; 12 contact pairs!)
upairs[0] = new Array('', '', ''); // (Dummy)
upairs[1] = new Array('aqbgckdielfxhzmwnvotpurs', 'KD', 'KD machine wiring (FRA, Sweden)');
upairs[2] = new Array('avboctdmezfngxhqiskrlupw', 'M3', 'M3 wiring on 11 Mar 1945\n[Ostwald/Weierud 2016]');
upairs[3] = new Array('hlknfmeiacbgdsowpzqxrutv', 'L1', 'Luftwaffe key sheet #2744\n(Days 1-9)');
upairs[4] = new Array('agirbhcsdzewfklxmpountqv', 'L2', 'Luftwaffe key sheet #2744\n(Days 10-21)');
upairs[5] = new Array('hkglnqsvuxtzrwadbfcoepim', 'L3', 'Luftwaffe key sheet #2744\n(Days 22-31)');

var etw = abc; // Entry wheel (no permutation)
var etq = 'jwulcmnohpqzyxiradkegvbtsf'; // ETW (wiring QWERTZ...-->ABCDEF...)
var ett = 'ilxrztkgjyamwvdufcpqeonshb'; // ETW Enigma T (KZROUQ...-->ABCDEF...)

var oldqwertz = 'QWERTZUIOASDFGHJKPYXCVBNML'; // Enigma keyboard
var keybd = new Array( "Q","W","E","R","T","Z","U"," I ","O", "A","S","D","F","G","H","J ","K", "P","Y","X","C","V","B","N","M","L");

var eu= new Array (6,31,4,29,18,39,16,25,30,23,28,1,38,11,36,37,26,27,24,21,14,3,12,17,2,7,0,33,10,35,8,5,22,19,20,13,34,15,32,9); // Enigma-Uhr (plugs a->b)
var ue= new Array(26,11,24,21,2,31,0,25,30,39,28,13,22,35,20,37,6,23,4,33,34,19,32,9,18,7,16,17,10,3,8,1,38,27,36,29,14,15,12,5); // Uhr inverse (b->a)
var ab= new Array (6,0,7,5,1,8,4,2,9,3); // Uhr plugs order: 'b'/white = f(a)
var ba= new Array (1,4,7,9,6,3,0,2,5,8); // Uhr plugs order: 'a'/red = f(b)

// --- End constants ---

// -- Selections + Defaults --
var mod ='', nr; // Model preset: name, number(select)

var wstep = new Array(abc, abc, abc, abc); // for turnover pos.
var walz0 = new Array( ukw[2][0], walze[1][0], walze[2][0], walze[3][0] ); // selected UKW & rotors: 1= right-most (fast), 2= center, 3= left
var wlz = new Array( walz0[0], walz0[1], walz0[2], walz0[3] ); // inner wiring (rotor pos.+ringsetting)
var ukm4 = ''; // selected fixed UKW_thin (for M4-type)

var w0 = new Array(65, 65, 65, 65); // wheel pos. 'A' (set)
var wout = new Array(65, 65, 65, 65); // pos. 'A' (current/displayed)
var r = new Array(0, 0, 0, 0); // ringsettings '1'

var gear = false; // rotor gear: normal (lever mech.)
var wrot = true, urot = false; // wheels stepping, UKW non-stepping
var uhr = 0; // Stecker-Uhr (0= as 'steckered')
var ukwset = false; // UKW not adjustable
var ud = false; // rewirable UKW-D
var udpairs = ''; // current UKW-D wiring (orig. key format)
var udcont = false; // UKW-D contact designation: UKW / BP (default)
var stboard = true; // has plugboard
var pairs = ''; // stecker pairs
var swp = abc, stecker = false; // stecker config
var free = false; // flag for 'Custom' mode
var ringst = false;  // mode 'ringsetting' off
var qwertzu = false; // QWERTZU keybard off
var monitor = false;
var key = ''; // cipher key info
var uind = 'ENIGMA~UHR'; // Uhr indicator
var up = '<span style=\"color:#c33\">&#9650<\/span>', dwn = '<span style=\"color:#070\">&#9660;<\/span>'; //arrows for signal path (Monitor)
if (navigator.userAgent.substr(25,4)=='MSIE' && navigator.userAgent.charCodeAt(30)<55) {
  up='<span style=\"color:red\">&Lambda;<\/span>'; dwn='<span style=\"color:#070\">V<\/span>';}
var spc =''; for (i=0; i<26; i++) spc += '&nbsp; ';

// - Initializing dynamic parameters -
var w = new Array(wlz[0], wlz[1], wlz[2], wlz[3]); // snapshot of rotating wheels
var lastw = new Array(0,0,0,0); // recall last wheel selections (mode "Custom")
var lastuhr = 0; 
var lastkey = -1; // for QWERTZ display
var coded = 0; // characters coded
var reset = new Array( true, true, true, true ); // for wheel adjustmen lock in text field input mode; cf. set()
var sp = new Array(7);

var f = document.querySelector('input');
var s = document.getElementById('status');

// === End declarations ===


// ====== Functions ======

function info() {
  alert('\tUniversal Enigma '+document.getElementsByName("version")[0].content+'\n\t(c) 2007-2021 by Daniel Palloks\n\nInfos: http:\/\/people.physik.hu-berlin.de\/~palloks\/js\/enigma\/\n\nThis software and source code may be used, distributed and modified freely as long as (1) my authorship remains acknowledged, (2) any modification is properly indicated, (3) the freeware\/ open source status and the conditions for distribution and modification remain unchanged. A copy of this statement must be distributed together with the software.\nThis software is provided \"as is\". The author will not be liable for any damage - direct, indirect or consequential - resulting from the use of this software.');
}

function neu(s) {
// When the browser's Reload button is pressed...
  document.f.reset(); // reset form f (rotor sel + settings; I/O)
  buildWRSet(); buildKeybd(); buildUKWSettings(); buildPlugbd();
  if (s==0) model(3); // "Custom": reset to well-defined config first
  model(s);
  unsteck();
}


function buildWRSet() { // Buttons {+/-} for positions/rings
  for (var i=0; i<4; i++) {
    buildSet('w-',i,'-','set(\'-\')'); buildSet('wp',i,'+','set(\'+\')');
    buildSet('r-',i,'-','-1'); buildSet('rp',i,'+','1');
  }
}

function buildSet(el,nr,sgn,set) {
  var u= (nr==0)? 'if(ukwset) ' : '';
  document.getElementById(el+nr).innerHTML= '<input type=\"button\" value=\"' +sgn+ '\" tabindex=\"-1\" onClick=\"' +u+ 'setw(' +nr+ ',' +set +')\">';
}


function buildKeybd() {
  var k='&nbsp;&nbsp;';
  for (var i=0; i<26; i++) {
    k+= '<a name=\"kqw\" tabindex=\"-1\" onMouseDown=\"this.style.fontSize=\'12px\';this.style.letterSpacing=\'2px\'\" onMouseUp=\"this.style.fontSize=\'16px\';this.style.letterSpacing=\'0\'\" href=\"javascript:en2(\'' +oldqwertz.charAt(i) +'\')\">';
    k+= (i!=17)? '&nbsp;' : '';
    k+= keybd[i] +'&nbsp;<\/a>';
    if (i!=6 && i!=7 && i!=15 && i!=25) {
      if (i==8 || i==16) k+= '<br><br>';
      if (i==8) k+= '&nbsp;&nbsp;';
      if (i!=16) k+= '&nbsp;';
    }
    k+='\n';
  }
  document.getElementById("keybd").innerHTML= k+ '<br><br>';
}


function buildUKWSettings() {
  var k= '<table width=\"100%\"><tr><td align=\"center\" valign=\"bottom\"><input type=\"text\" name=\"ukws\" size=\"2\" maxlength=\"2\" onMouseOver=\"this.title=(ud)? \'n/a (fixed connection)\':\'\'\" disabled><\/td>';
  k+= '<td colspan=\"2\" style=\"text-align:right;font-size:12px\"><span style=\"letter-spacing:2px\">Inner wiring<br>of UKW &nbsp;<span id=\"ulabel\"><\/span><\/span><\/td>';
  k+= '<td rowspan=\"4" align=\"right\" style=\"color:#282828\"><span title=\"Load preset wiring">&nbsp;&laquo;&nbsp;<\/span><select id=\"udpre\" name=\"udpre\" size=\"1\" onMouseOver=\"this.title=(ud)? this.options[this.selectedIndex].title : \'(standard wiring)\'\" style=\"font-family:serif;font-size:12px;margin-bottom:4px\" onChange=\"if(this.value!=\'0\'){ udpairs= upairs[this.selectedIndex][0]; wsel(0,-1)}\" disabled>\n<option selected disabled value=\"0\" title=\"(custom wiring)\">--<\/option>';
  for (var i=1; i<upairs.length; i++)
    k+= '<option value=\"'+i+'\" title=\"'+upairs[i][2] +'\">' +upairs[i][1] +'<\/option>';
  k+= '\n<\/select><br>\n';
  k+= '<span title=\"Contact designation">&nbsp;&#8942;&nbsp;<\/span><select id="cdesgn" size="1" onMouseOver="this.title=getElementById(\'cdsg_\'+this.value).title\" style=\"text-align:center;font-family:serif;font-size:12px;margin-bottom:4px\" onChange=\"udcont=(this.value==\'2\')? true:false; cnamesUD()\" disabled>\n<option id=\"cdsg_1\" selected value=\"1\" title=\"Bletchley Park harmonized contact designation\">BP<\/option><option id=\"cdsg_2\" value=\"2\" title=\"Contacts as in UKW-D and keysheets\">U.D<\/option>\n<\/select><br><br>\n';
  k+='<input type=\"button\" id=\"uclr\" style=\"margin-bottom:0\" value=\" Clear \" onClick=\"for (var l=1;l<13;l++) document.getElementsByName(\'ukws\')[l].value= \'\'; document.getElementById(\'udpre\').selectedIndex=0\"><\/span><\/td><\/tr>';
  for (i=0; i<4; i++) {
    k+= '<tr align=\"center\">';
    for (var j=1; j<4; j++)
      k+= '<td><input type=\"text\" name=\"ukws\" size=\"2\" maxlength=\"2\" onClick=\"this.select()\" onKeyUp=\"this.value=(udcont)? this.value.toUpperCase():this.value.toLowerCase()\" onChange=\"getElementById(\'uakt\').style.color=\'#a00\'" disabled><\/td>';
  }
  k+= '<td align=\"right\"><input type=\"button\" id=\"uakt\" value=\" Activate \" onClick=\"if (setUDWiring()){document.getElementById(\'udpre\').selectedIndex=0; this.style.color=\'#000\'\}" disabled><\/td><\/tr><\/table>\n';
  document.getElementById("udta").innerHTML= k;
}


function buildPlugbd() {
  var k='<table style=\"width:100%;border:0\"><tr style=\"text-align:center\">\n';
  for (var i=0; i<15; i++) {
    if (i!=5 && i!=11) {
      k+= '<td><input type=\"text\" name=\"stf\" size=\"2\" maxlength=\"2\" onClick=\"this.select()\" onKeyUp=\"{this.value=this.value.toUpperCase();stbMark()}\" onMouseOver=\"this.title=tts(this.value)\"';
      if (i>11) k+= ' style=\"background-color:#f0f0f0\"';
      k+= '><\/td>\n';
    }
    else k+= '<td>&nbsp;<\/td>\n';
  }
  document.getElementById("plugs").innerHTML= k+ '<\/tr><\/table>';
}


function wlzReset() {
  for (var i in wlz) {
    wlz[i] = rot(walz0[i],-r[i]); //keep ringsetting!
    w[i] = wlz[i];
    wout[i] = w0[i] = 65;
    reset[i] = true;
  }
  document.f.w1.value = String.fromCharCode(w0[1]);
  document.f.w2.value = String.fromCharCode(w0[2]);
  document.f.w3.value = String.fromCharCode(w0[3]);
  document.f.w0.value = String.fromCharCode(w0[0]);
  viewKey(0); wmon(-1);
}

function rngReset() {
  for (var i in wlz) {
    wlz[i] = rot(wlz[i],r[i]); //keep rotor positions!
    r[i] = 0;
  }
  document.f.r1.value = String(r[1] +1);
  document.f.r2.value = String(r[2] +1);
  document.f.r3.value = String(r[3] +1);
  document.f.r0.value = String(r[0] +1);
  viewKey(0); wmon(-1);
}


function unsteck() {
  swp= abc; pairs= ''; stecker= false; viewKey(0); // deactivate plugs (but do not delete)
  document.getElementById("stb").value = ' Activate ';
  for (var i=0; i<13; i++) { //... Anything steckered? Mark activation button
    if (document.s.stf[i].value != '') { stbMark(); setUhr(0); break }
  }
  document.getElementById("bar").innerHTML= uind;
}

function steckReset () { 
  stbMark(); // just for the effect
  swp= abc; pairs= '';
  for (var i=0; i<13; i++) document.getElementsByName('stf')[i].value= '';
  setTimeout('steck()',150); setUhr(0); lastuhr= 0;
}


function model (s) {
  mod= m[s].mod; nr= s;
  free= (mod=='custom')? true : false;
  ukwset= m[s].uset; coded= 0;
  document.getElementsByName("es")[0].disabled= true;
  document.getElementById("uakt").style.color= '';
  stboard= m[s].stk; stkStatus(stboard);
  document.a.preset.style.color= document.a.preset.options[s].style.color;
  var mg= document.getElementsByName("mg");

  if (!(free)) { // model preset was selected...
    urot= m[s].urot; gear= m[s].mech; wrot= false; walzenrot('rotw');
    document.f.reset(); en2(' ');//QWERTZU lamp off
    unsteck(); setUhr(0);
    if (gear) msel('G'); else msel ('N');
    mg[0].disabled= mg[1].disabled= true;
    document.getElementById('status1').innerHTML='';
    document.getElementById('status3').innerHTML = '0';
    // Wheels preselection:
    etwsel(m[s].etw);
    if (mod=='I' || mod=='M3') wsel(0,2); else if (mod=='M4') wsel(0,3); else wsel(0, parseInt(Math.log(m[s].ukwhash) / Math.LN2)); // UKW
    document.f.rotUkw.disabled= true;
    if (s!=1) {
      wsel(1, m[s].w1st); wsel(2, m[s].w1st+1); wsel(3, m[s].w1st+2)
    }
    else { // "Arb.W."
      wsel(1,0); wsel(2,0); wsel(3,0)
    }
  }
  else { // mode "Custom"...
    buildUMenu(lastw[0]); 
    for (var i=1; i<4; i++) buildWMenu(i,lastw[i]);
    mg[0].disabled= mg[1].disabled= false;
    document.getElementsByName("es")[0].disabled= false;
    document.f.w0.disabled = document.f.r0.disabled = ''; // UKW
    document.f.rotUkw.disabled = '';
    viewKey(1); // Refresh to display UKW pos.
  }
  wmon(-1);
}


function buildWMenu(w,s) {
  var k='<select size=\"1\" onMouseOver=\"if(this.value !=0) this.title=\'Engages at: \'+walze[this.value][2]; else this.title=walze[0][2]\" style=\"text-align:center;font-family:serif;font-size:12px\" onChange=\"this.title=\'Engages at: \'+walze[this.value][2]; wsel(' +w +',parseInt(this.value))\">\n';
  for (var j= m[nr].w1st; j<= m[nr].wlast; j++) {
    var o = (j!=0)? 'Engages at: ' : '';
    k+= '<option ';
    if ((free && j==lastw[w]) || (!free && j==s)) k+= 'selected ';
    k+= 'value=\"'+j+'\" title=\"'+o +walze[j][2]+'\">'+walze[j][3]+'<\/option>\n';
  }
  document.getElementById("s"+w).innerHTML = k +'<\/select>';
}

function buildUMenu(s) {
  var n= mod.charAt(0);
  var d= (!free && n!='I' && n!='M')? 'disabled ' : '';
  var k='<select ' +d +'onMouseOver=\"this.title=ukw[this.value][2]" size=\"1\" style=\"text-align:center;font-family:serif;font-size:12px;color:#c33\" onChange=\"wsel(0, parseInt(this.value))\">\n';
  for (var j=0; j<ukws; j++) {
    if ((m[nr].ukwhash & Math.pow(2,j)) != 0) {
      k+= '<option ';
      if ((free && j==lastw[0]) || (!free && j==s)) k+= 'selected ';
      k+= 'value=\"'+j+'\" title=\"'+ukw[j][2]+'\">'+ukw[j][1]+'<\/option>\n';
    }
  }
  document.getElementById("u").innerHTML = k +'<\/select>'; 
}


function notch(w,s) {
  wstep[w]= abc; var n= walze[s][1];
  for (var i=0; i<n.length; i++) {
    var t= abc.indexOf(n.charAt(i));
    wstep[w]= wstep[w].substr(0,t) +n.charAt(i).toUpperCase() +wstep[w].substr(t+1);
  }
}


function etwsel (sel) { 
  etw = (sel==1)? abc : (sel==2)? etq : ett;
  for (var i=1; i<=etws; i++) document.getElementById("es_"+i).selected = (i==sel)? true : false; // for auto-select
  wmon(4); viewKey(0);
}


function wsel (w,sel) { 
  if (w==0) { // UKW...
    if (sel==-1) { var udcustm= true; sel= 8; } // UKW-D wiring custom or custom-selected preset
    ud= (sel==8)? true : false; // UKW-D flag
    switch(sel) {
      case 3: walz0[0]= walzebeta; ukm4= ukbduenn; break;
      case 4: walz0[0]= walzegamma; ukm4= ukbduenn; break;
      case 6: walz0[0]= walzebeta; ukm4= ukcduenn; break;
      case 7: walz0[0]= walzegamma; ukm4= ukcduenn; break;
      case 8: if (!(udcustm)) udpairs= (mod=='M3' || mod=='M4')? upairs[2][0] : upairs[1][0]; walz0[0]= pairs2ukw(ud2bp(udpairs,false)); ukm4=''; break;
      default: walz0[0]= ukw[sel][0]; ukm4=''; break;
    }
  }
  else walz0[w]= walze[sel][0]; // Rotor wheels...

  w0[w]= wout[w]= 65; document.getElementsByName('w'+w)[0].value="A";
  r[w]= 0; document.getElementsByName('r'+w)[0].value="1";
  wlz[w]= walz0[w];
  reset[w]= true;
  lastw[w]= sel;

  if (w==0) { // UKW...
    buildUMenu(sel);
    var u= document.getElementById("rotu");
    document.getElementById('rngu').innerHTML= ukw[sel][1];
    document.f.rotUkw.checked = (urot)? 'checked' : '';
    u.style.backgroundColor= (urot)? '#6c0' : '';
    ukwset= (mod=='M4' && (ud))? false : m[nr].uset;
    document.f.w0.disabled= document.f.r0.disabled= (ukwset)? '' : 'disabled';
    if (ukm4=='') {
      document.getElementById('ulabel').innerHTML= (ud)? 'D' : ukw[sel][1];
      loadUPairs(walz0[0]);
      document.getElementById('ukg').innerHTML= u.innerHTML= 'UKW ';
      u.title= '';  
    } 
    else { // Greek wheel present
      document.getElementById('ulabel').innerHTML= (ud)? 'D' : ukw[sel][1].charAt(0).toLowerCase();
      loadUPairs(ukm4);
      document.getElementById('ukg').innerHTML= u.innerHTML= 'GrW ';
      u.title= 'Greek wheel';
    } 
  }
  else { // Wheels...
    buildWMenu(w,sel);
    notch(w,sel);
    document.getElementById('rng'+w).innerHTML= walze[sel][3];
  }
  wmon(w); viewKey(0);
}


function loadUPairs (sel) {
  var s= (ud)? bp2ud(ukw2pairs(sel),true).toUpperCase() : ukw2pairs(sel);
  if (ud) s= 'JY'+pairUp(s,true).split(' ').join('');
  var p= document.getElementsByName("ukws");
  for (var i=0; i<13; i++) {
    p[i].value= s.charAt(2*i) +s.charAt(2*i+1);
    if (i>0) p[i].disabled= (ud)? '' : 'disabled';
  }
  var q= document.getElementById("udpre");
  q.selectedIndex= 0; q.options[0].disabled= false;
  for (i=0; i<upairs.length; i++)
    if (ud && udpairs==upairs[i][0]) { 
      q.selectedIndex= i; 
      q.options[0].disabled= true;
      break; 
    }
  document.getElementById("cdesgn").selectedIndex= (ud)? 1 : 0;
  udcont= (ud)? true : false;
  document.getElementById("uakt").disabled= document.getElementById("uclr").disabled= document.getElementById("udpre").disabled= document.getElementById("cdesgn").disabled= (ud)? false : true;
}


function msel (sel) {
  gear = (sel=="G")? true : false;
  document.getElementsByName("mg")[0].checked= (gear)? false : true; // for auto-preset
  document.getElementsByName("mg")[1].checked= (gear)? true : false; // auto-preset
  document.getElementById("mech_n").style.backgroundColor= (gear)? '' : '#66e';
  document.getElementById("mech_g").style.backgroundColor= (gear)? '#66e' : '';
  viewKey(0);
}


function set(s) {
  if (document.f.inp.value !='' && !(reset[0] && reset[1] && reset[2] && reset[3])) return 0; // locked
  var n= s.charCodeAt(0);
  if (n==43) return 1;
  if (n==45) return -1;
  if (n < 65 || n > 90 || s=='') return 0;
  return n;
}

function setr(s) {
  var n=0;
  if (!(isNaN(s))) {
    n = parseInt(s) +1; // distinguish from '+'-key with value 1 case (reverse later!!)
    if (n==1) n=2; // input "0" = input "1" (i.e. becomes 2 here)
    else if (n < 1 || n > 27 || s=='') n= 0;
  }
  return n;
}


function setw (w,n) {
  if (n==0) { // restore display
    if (ringst) document.getElementsByName('r'+w)[0].value = r[w] +1;
    else document.getElementsByName('w'+w)[0].value = String.fromCharCode(wout[w]);
    return;
  }
  if (ringst) { // case ring setting
    if (n > 1 && n < 28) n -= r[w] +2; //distance new-old value (n from rset was increased by 2!)
    r[w] = (r[w] +n +26) % 26;
    document.getElementsByName('r'+w)[0].value = String(r[w] + 1);
    wlz[w] =rot(wlz[w],-n);
  }
  else { // case wheel position
    if (n > 64 && n < 91) n -= wout[w]; // distance new-old value
    w0[w] = wout[w] = 65 + (wout[w]-65 + n +26) % 26;
    document.getElementsByName('w'+w)[0].value = String.fromCharCode(wout[w]);
    wlz[w] = rot(wlz[w],n);
  }
  wmon(w); viewKey(0);
}


function wmon (w) {
  for (var i=6; i>=0; i--) {
    var mw= document.getElementById('w.'+i), ms= document.getElementById('sg'+i);
    var a= (i==w)? '<b>' : '', b= (i==w)? '<\/b>' : '';
    if (i<4) {
      mw.innerHTML= a +rot(wstep[i],wout[i]-65) +b;
      ms.innerHTML= a +rng(walz0[i],wout[i]-65,r[i]) +b;
    }
    else ms.innerHTML= (i==5)? swp : (i==4)? etw : '';
    ms.style.backgroundColor= mw.style.backgroundColor= (w==i)? '#eef' : '';
  }
  document.getElementById('status2').innerHTML= (w<4 && w>=0)? wout[w]-65 +'-' +r[w] : '';
}

function wlzShow() {
  for (var i=0; i<6; i++) {
    var mw= document.getElementById('w.'+i), ms= document.getElementById('sg'+i);
    if (i<4) mw.innerHTML= rot(wstep[i],wout[i]-65); 
    if (i==0) ms.innerHTML='';
    ms.style.backgroundColor= mw.style.backgroundColor= '';
  }
}

function signal(l,n,d) {
  var j= l.charAt(2);
  if (d==dwn) sp[j]= spc.split(' ');
  sp[j][n]= d; 
  document.getElementById(l).innerHTML= sp[j].join('');
}


function switchRngSettings (sw) {
  ringst= (sw)? true : false;
  document.getElementById("walz").style.display= (sw)? "none" : "";
  document.getElementById("rngst").style.display= (sw)? "" : "none";
  wmon(-1);
}

function switchUKWSettings (sw) {
  document.getElementById("walz").style.display= (sw)? "none" : "";
  document.getElementById("ukwd").style.display= (sw)? "" : "none";
  if (sw) { 
    var u=(ukm4=='')? walz0[0] : ukm4; 
    loadUPairs(u); 
    document.getElementById("uakt").style.color= '';
  }
  wmon(-1);
}


function walzenrot (r) {
  if (r=="rotw") {
    wrot= (wrot)? false : true;
    document.getElementById(r).style.backgroundColor= (wrot)? '#6c0' : '#f33';
  }
  else {
    urot= document.f.rotUkw.checked;
    document.getElementById(r).style.backgroundColor= (document.f.rotUkw.checked)? '#6c0' : '';
  }
  viewKey(0);
}


function stkStatus(f) {
  if (!f && document.k.stl.value=="Hide plugboard") fadeSt();
  document.k.stl.disabled= (f)? '' : true;
}


function steck () {
  var stest0, stest1, k0, k1;
  var st= document.getElementsByName('stf'), sb= document.getElementById("stb");
  pairs= '', swp = abc, stecker = false;
  for (var i=0; i<13; i++) {
    stest0 = st[i].value.charAt(0).toLowerCase(); 
    stest1 = st[i].value.charAt(1).toLowerCase();
    if (stest1 == stest0) { st[i].value= ''; stest0 = stest1 = '' }
    // Validate... 
    if (stest0 != '') {
      if ((stest0.charCodeAt(0) < 97 || stest0.charCodeAt(0) > 122) || (stest1.charCodeAt(0) < 97 || stest1.charCodeAt(0) > 122) || stest1 == '') { 
        alert('Error! (Field '+String(i+1)+')'); pairs=''; return(false); }
      // Validate2: search for doppelgangers...
      if (pairs.lastIndexOf(stest0) >= 0 || pairs.lastIndexOf(stest1) >= 0 ) {
        alert('Error! Double use (field '+String(i+1)+').'); pairs=''; return(false); }
      else {
        pairs+= stest0 + stest1;
        // build swap string (using replace function srepl())...
        k0 = abc.indexOf(stest0), k1 = abc.indexOf(stest1);
        swp = srepl(swp,k0,stest1); swp = srepl(swp,k1,stest0);
      }
    }//-if !=''
  } //-for
  if (swp != abc) { 
    stecker = true; 
    sb.value= ' Deactivate '; // button text
  }
  sb.style.fontWeight= 'normal'; sb.style.color= '#000';
  var b=''; for (i=0; i<10; i++) { b+= (i<pairs.length/2)? '<span style=\"color:#fcf776\">' +uind.charAt(i) +'<\/span>' : uind.charAt(i); document.getElementById("bar").innerHTML=b }
  if (pairs.length<20) setUhr(0);
  if (uhr!=0) swp= uSwp();
  wmon(5); viewKey(0);
}


function srepl (s, nr, c) {
  s = (nr==0)? c +s.substring(1) : s.substring(0, nr) +c +s.substring(nr + 1);
  return(s);
}


function stbMark() {
  var s= document.getElementById("stb");
  s.value= ' Activate '; s.style.fontWeight= 'bold'; s.style.color= '#a52a2a';
}


function setUhr(n) {
  var ub= document.getElementById('uhr');
  if (uhr!=0) lastuhr = uhr;
  if (n==0) uhr=0;
  else if (n==40) uhr= (uhr==0)? lastuhr : 0;
  else if (pairs.length>19) uhr= (uhr +n +40) % 40;
  ub.innerHTML= zeroFill(uhr);
  ub.style.backgroundColor= (uhr==0)? '#aaa':'#fcf776';
  document.getElementById('stu').innerHTML= (uhr==0)? 'PLG' : 'UHR';
  swp= uSwp();
  wmon(5); viewKey(0);
}

function uSwp() {
  var u='';
  for (var i=0; i<26; i++) u+= eUhr(abc.charAt(i));
  return u;
}

function eUhr(s) {
  var n= pairs.indexOf(s); 
  if (n== -1) return(s);
  if (n>19) return (swp.charAt(abc.indexOf(s))); // plugs 11-13: no Uhr
  if (n % 2 ==0) // a-plugs-->b-plugs
    return pairs.charAt( ab[((eu[(2*n +uhr)%40] +40-uhr)%40 -2)/4]*2 +1 ); 
  else // b-plg-->a-plg
    return pairs.charAt( ((ue[(ba[(n-1)/2]*4 +uhr)%40] +40-uhr)%40 -2)/2 );
}


function fadeSt() {
  var l=document.k.stl, s=document.getElementById('stecker');
  if (l.value=="Hide plugboard") {
    s.style.display= "none";
    l.value= "Show plugboard"; l.style.fontStyle= "";
  }
  else { 
    s.style.display= "";
    l.value= "Hide plugboard"; l.style.fontStyle= "italic";
  }
}


function fadeInp() {
  document.f.out.value = document.f.inp.value = ''; coded = 0;
  document.getElementById('status3').innerHTML= '0';
  if (qwertzu) { // switch to TXT
    qwertzu = false;
    document.getElementById("qwertzu").style.display = "none";
    document.getElementById("txtfeld").style.display = "";
    document.k.qw.value= "QWERTZU keys";
    if (ringst) { ringst = false; var t = true } // apply next line only to rotor pos.
    for (var i in w0) setw(i,w0[i]); // Reset to last home positions 
    if (t) ringst = true; // reset var ringst if changed 2 lines up
    document.f.inp.focus();
  }
  else { // to QWERTZU
    qwertzu = true;
    document.getElementById("txtfeld").style.display= "none";
    document.getElementById("qwertzu").style.display= "";
    document.k.qw.value= "Text input field ";
    en2(' '); // lamp off
    enigma(' '); // Reset last home positions
    document.f.inpqw.focus();
  }
  for (i in w0) w0[i] = wout[i];
  wmon(-1); viewKey(0);
}


function fade () {
  var f=document.k.knopf, m=document.getElementById('monitor');
  if (f.value==" Hide monitor ") {
    m.style.display= "none";
    f.value= " Show monitor "; f.style.fontStyle= "";
    monitor = false;
  }
  else {
    m.style.display= "";
    f.value= " Hide monitor "; f.style.fontStyle= "italic";
    monitor = true;
  }
}


function ttw(s) {
  if (ringst) return ( '"' +String.fromCharCode(Number(s) +64) +'"' );
  else return ( '"' +String(s.charCodeAt(0) -64) +'"' );
}

function tts(s) {
  var n0= s.charCodeAt(0), n1= s.charCodeAt(1);
  if (s!='' && n0 > 64 && n0 < 91 && n1 > 64 && n1 < 91) return ( '"' +String(n0 -64) +'/' +String(n1 -64) +'"' );
  else return ('');
}


function scanUPairs (chk) {
  var p= document.getElementsByName("ukws"), s='', q='', f=0;
  var a= (udcont)? abc.split('j').join('').split('y').join('') : abc.split('b').join('').split('o').join('');
  for (var i=1; i<13; i++) {
    if (p[i].value.length==2) {
      s+= p[i].value;
      q= p[i].value.toLowerCase();
      a= a.split(q.charAt(0)).join('').split(q.charAt(1)).join('');
    }
    else if (chk) f=i;
    else if (p[i].value.length!=0) s+= p[i].value +' ';
  }
  if (udcont) a= a.toUpperCase();
  if (f!=0) {
    if (a.length==2) { p[f].value=a; s+= a; alert('Auto-completed: '+a); f=0 }
    else alert('Wiring incomplete. Input 12 contact pairs!\nUnwired contacts: '+a.split(''));
  }
  return ((f)? '' : s);
}

function chkUPairs (s) {
  var t, u, v=abc, s0=document.getElementsByName("ukws")[0].value.toUpperCase();
  if (s!=='') {
    for (var i=0; i<s.length; i++) {
      t= s.charAt(i); u= t.toUpperCase().charCodeAt(0);
      if (u<65 || u>90 || u==s0.charCodeAt(0) || u==s0.charCodeAt(1)) { 
        var a= (u>64 && u<91)? '\nNote: '+s0.split('')+' are not available (fixed connection)!' : '';
        alert('Invalid input \"'+t+'\" (Field #'+Math.ceil((i+1)/2)+').'+a);
        s= ''; break;
      } else if (v.indexOf(t.toLowerCase())== -1) {
        alert('Error: Double use \"'+t+'\" (Field #'+Math.ceil((i+1)/2)+').');
        s= ''; break;
      }
      v= v.split(t.toLowerCase()).join('');
    }
  }
  return (s);
}

function setUDWiring () {
  var p= chkUPairs(scanUPairs(true)).toLowerCase();
  if (p!='') {
    udpairs= (udcont)? pairsort(p) : bp2ud('bo'+p,true);
    wsel(0,-1);
    return (true);
  }
  else return (false);
}

function cnamesUD () {
  var f= document.getElementsByName("ukws");
  f[0].value= (udcont)? 'JY' : 'bo'; // preset for manual entry case
  var p= (udcont)? 'JY'+bp2ud(scanUPairs(false),false).toUpperCase() : ud2bp(scanUPairs(false),false);
  for (var i=0; i<13; i++)
    f[i].value= (i<p.length/2)? p.charAt(2*i) +p.charAt(2*i+1) : '';
}

function ud2bp (s,sort) {
  s= s.toLowerCase();
  for (var i=0; i<s.length; i++)
    if (s.charAt(i)!=' ') //for cname switch on incomplete wiring
      s= s.substr(0,i) +abc.charAt(udlabels.indexOf(s.charAt(i))) +s.substr(i+1);
  s= 'bo' +s;
  return ((sort)? pairsort(s) : s);
}

function bp2ud (s,sort) { 
  s= s.toLowerCase().split('b').join('').split('o').join('');
  for (var i=0; i<s.length; i++)
    if (s.charAt(i)!=' ') //for cname switch on incomplete wiring
      s= s.substr(0,i) +udlabels.charAt(abc.indexOf(s.charAt(i))) +s.substr(i+1);
  return ((sort)? pairsort(s) : s);
}

function pairsort (s) {
  for (i=1; i<s.length; i+=2)
    if (s.charCodeAt(i)<s.charCodeAt(i-1))
      s= s.substr(0,i-1) +s.substr(i,1) +s.substr(i-1,1) +s.substr(i+1);
  return (s);
}

function pairs2ukw (s) {
  var c0, c1, k0, k1, swp= abc;
  for (var i=1; i<s.length; i+=2) {
    k0 = s.charCodeAt(i-1)-97, k1 = s.charCodeAt(i)-97; 
    swp = srepl(swp,k0,s.charAt(i)); swp = srepl(swp,k1,s.charAt(i-1));
  }
  return (swp);
}

function ukw2pairs (s) {
  var a= abc, p='', b='', t='';
  while (a.length > 0) {
    p+= a.charAt(0)+ s.charAt(0);
    b= a.substr(1,a.indexOf(s.charAt(0))-1) +a.substr(a.indexOf(s.charAt(0))+1);
    t= s.substr(1,a.indexOf(s.charAt(0))-1) +s.substr(a.indexOf(s.charAt(0))+1);
    a=b; s=t;
  }
  return (p);
}


function pairUp(s,sort) {
  var pu= '';
  for (var i=0; i<s.length-1; i+=2) pu+= ' ' +s.substr(i,2).toUpperCase();
  if (sort) pu= ' ' +pu.split(' ').sort().join(' ');
  return (pu);
}

function zeroFill(n) {
  return (n<10)? '0'+String(n) : String(n);
}


function viewKey(n) {
  if (qwertzu && n!=1) {
    for (i in w0) w0[i] = wout[i]; // after wheel settings in QWERTZU mode: set starting pos. to current values (except when switching to 'Custom' mode)
  }
  var p0= new Array ( String.fromCharCode(w0[0]), String.fromCharCode(w0[3]), String.fromCharCode(w0[2]), String.fromCharCode(w0[1]) );
  if (pairs=='') pairs= ' - -';
  var e= document.getElementById("es_"+document.f.es.value).innerHTML;
  var a= (free)? 'E:' +e+ ' / ' : '';
  key='Wheels: ';
  var b= (!wrot)? '^' : (gear)? '¤' : '-'; 
  var c= (urot)? b : ' ';
  key= (ukm4==ukbduenn)? key+'B.' : (ukm4==ukcduenn)? key+'C.' : key+ ukw[lastw[0]][1]+'.';
  if (ukm4 !='') key+= (walz0[0]==walzebeta)? 'Beta' : 'Gamma';
  key+= c+ document.getElementById("rng3").innerHTML +b+ document.getElementById("rng2").innerHTML +b+ document.getElementById("rng1").innerHTML + ' (';
  key+= (ukwset)? p0 : p0.slice(1);
  key+= ') / Rings: ';
  if (ukwset) key+= zeroFill(r[0] +1);
  key+= ' '+zeroFill(r[3] +1)+' '+zeroFill(r[2] +1)+' '+zeroFill(r[1] +1);
  if (stboard) {
    key+= ' / Plugged:'+pairUp(pairs,false);
    if (uhr!=0) key+= ' /Uhr=' + zeroFill(uhr);
  }
  document.getElementById("key1").innerHTML= a+ key;

  // Monitor
  var l='Model: '+mod;
  if (free) {
   l+= '<br><br>Drive: ';
   l+= (gear)? 'Gear box (no ' : 'Levers (with ';
   l+='double-stepping)<br>ETW \"' +e+ '\"<br>'+ukw[lastw[0]][2];
   if (urot) l+=' « rotating';
  }
  if (!wrot) l+= '<br><br>-- Wheel stepping DEACTIVATED! --';
  var k=key.split('/ '), mk=key.split('(')[1].split(')')[0].split(',').join(' '), ksu='';
  var b1=' '+b+' ', c1=' '+c+' ', w=key.split('(')[0].split(c).join(c1).split(b).join(b1);
  l+='<br><br>'+w;
  if (ud) l+='<br>*:'+pairUp(udpairs,true);
  l+='<br>Start: '+mk+'<br>'+k[1]+'<br>';
  if (stboard) { var ks= k[2].split('/Uhr='), u= (uhr!=0)? '<br>Uhr: '+ks[1] : ''; ksu= ks[0]+u; }
  document.getElementById("r").innerHTML= l+ksu;
}




// ---- MAIN LOOP (text field input) ----

function enigma(s) {
// always processes entire content of text field!

  if (monitor) {
    var mon = true;
    monitor = false; // sigal path only for final coded character
  }
  var start = new Date();

  // reset rotors ...
  for (var i in w0) { wout[i]= w0[i]; w[i]= wlz[i]; } 
  coded= 0;
  var out = ''; 
  // ... and clear output, as whole string is coded in each run!

  for (i=0; i < s.length; i++) {

    if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {

      var last = i;
      for (var j in reset) reset[j] = false;

      if (wrot) engage(); //engage rotors
      out = out + kodieren(s.charAt(i));
      if ( ukm4 !='' && (coded+1) % 4 ==0) out+= ' ';
      if ( ukm4 =='' && (coded+1) % 5 ==0) out+= ' ';
      coded++;

    }

  } //-for

  document.f.w0.value = String.fromCharCode(wout[0]); // UKW
  document.f.w3.value = String.fromCharCode(wout[3]);
  document.f.w2.value = String.fromCharCode(wout[2]);
  document.f.w1.value = String.fromCharCode(wout[1]);

  if (mon) {
    monitor = true;
    wlzShow();
    if (out!='') kodieren(s.charAt(last)); //display signal path for final coded character
    else wmon(-1);
  }
  document.getElementById('status1').innerHTML = (s=='')? '' : s.charCodeAt(s.length-1);
  document.getElementById('status3').innerHTML = coded;

  var ende = new Date(), zeit = (ende.getTime() - start.getTime())/1000;
  document.getElementById('status0').innerHTML = 'OK';
  document.getElementById('t').innerHTML = zeit +' s';
  document.getElementById('v').innerHTML = parseInt(coded/zeit) +' cps';

  return(out);
}
// ---- End main loop ----

f.addEventListener('input', x);

function en2(s) { // QWERTZU Main Loop (text input)...

  var sl = s.length, l = document.f.out.value.length;
  if (monitor && sl > 499 && warn()==false) { document.getElementById('status0').innerHTML= '<span style=\"color:#c33\">Cancelled!<\/span>'; return ''; }

  if (sl > 1) {
    var start = new Date();
    document.f.inpqw.style.backgroundColor='#eaa';
  }
  
  for (var i=0; i < sl; i++) {
    if (lastkey > -1) { document.getElementsByName('kqw')[lastkey].style.color= ''; document.getElementsByName('kqw')[lastkey].style.textShadow= ''}
    var e = en(s.charAt(i).toLowerCase()).toUpperCase(); 
    if (e != '') { 
      var taste = oldqwertz.indexOf(e);
      document.getElementsByName('kqw')[taste].style.color = '#ffc';
      document.getElementsByName('kqw')[taste].style.textShadow = '1px 1px 5px #eea, -1px 1px 5px #eea, 1px -2px 6px #eea, -1px -1px 6px #eea';
      lastkey = taste;
      l++;
      document.f.out.value += e;
      if (ukm4 != '' && (l+1) % 5 == 0) { document.f.out.value += ' '; l++ }
      if (ukm4 == '' && (l+1) % 6 == 0) { document.f.out.value += ' '; l++ }
    }
  }

  if (sl==1) document.getElementById('status0').innerHTML= 'OK'; //(Patch)
  if (sl > 1) {
    var ende = new Date(), zeit = (ende.getTime() - start.getTime())/1000;
    document.getElementById('status0').innerHTML = 'OK';
    document.getElementById('t').innerHTML = zeit +' s';
    document.getElementById('v').innerHTML = parseInt(coded/zeit) +' cps';
    document.f.inpqw.style.backgroundColor='';
  }

}


function en(s) { // QWERTZU Main Loop...

  wip(0);
  if (monitor) document.getElementById('status1').innerHTML = s.charCodeAt(0);

  for (var i in wlz) w[i]= wlz[i];

  if (s.charCodeAt(0) > 96 && s.charCodeAt(0) < 123) {
    if (wrot) engage(); // engage rotors
    if (monitor) wlzShow()

    var out = kodieren(s.charAt(0));
    coded++;
    document.getElementById('status3').innerHTML = coded;

    for (i in wlz) wlz[i]= w[i]; // ... must proceed
    document.f.w0.value = String.fromCharCode(wout[0]);
    document.f.w3.value = String.fromCharCode(wout[3]);
    document.f.w2.value = String.fromCharCode(wout[2]);
    document.f.w1.value = String.fromCharCode(wout[1]);

    return out;
  }
  else return '';
}



function x(e) {if (e.target.value == "MrBennet!") {s.textContent = "Valid password!"} else {s.textContent = "Invalid password!"}}




function wip(n) {
  document.getElementById('status0').innerHTML= '...';
  if (n==0) document.getElementById('t').innerHTML= document.getElementById('v').innerHTML='';
}

function warn() {
  return confirm('Warning: Large input text!\nDeactivating the monitor may accelerate the process considerably.\n\'OK\', to continue anyway (window might not close immediately).')
}


// Engage rotor stepping
function engage() {
  if (gear) engage_gear(); else engage_lever();
}


// Engage for lever mech.
function engage_lever() {

  // collect notched-in rotor pairs:
  var nu = false, n3 = false, n2 = false;
  if ((wstep[3].charCodeAt(wout[3]-65) < 91) && urot) { // capital letter = turnover point
    nu = true;
    n3 = true;
  }
  if (wstep[2].charCodeAt(wout[2]-65) < 91) {
    n3 = true;
    n2 = true;
  }
  if (wstep[1].charCodeAt(wout[1]-65) < 91) {
    n2 = true;
  }

  if (nu) {
    w[0] = rot(w[0],1); 
    wout[0]++; if (wout[0] > 90) wout[0]= 65;
  }
  if (n3) {
    w[3] = rot(w[3],1); 
    wout[3]++; if (wout[3] > 90) wout[3]= 65; 
  }
  if (n2) {
    w[2] = rot(w[2],1); 
    wout[2]++; if (wout[2] > 90) wout[2]= 65; 
  }
  // always rotate wheel #1
  w[1] = rot(w[1],1); 
  wout[1]++; if (wout[1] > 90) wout[1]= 65;

}


// Engage for gearbox mech.
function engage_gear() {

  w[1] = rot(w[1],1); 
  wout[1]++; if (wout[1] > 90) wout[1]= 65; // display for rotor 1 (if Z then A)

  if (wstep[1].charCodeAt((wout[1]-40) % 26) < 91) { // capital letter on previous position(as wheel has already stepped) indicates turnover point: (wout-65)-1 +26
    w[2] = rot(w[2],1); 
    wout[2]++; if (wout[2] > 90) wout[2]= 65; 

    if (wstep[2].charCodeAt((wout[2]-40) % 26) < 91) { // turnover
      w[3] = rot(w[3],1); 
      wout[3]++; if (wout[3] > 90) wout[3]= 65; 

      if (urot && (wstep[3].charCodeAt((wout[3]-40) % 26) < 91)) { // turnover to UKW if UKW is a rotor
        w[0] = rot(w[0],1); 
        wout[0]++; if (wout[0] > 90) wout[0]= 65; 
      }
    }
  }
}


// This is the KEY part!
function kodieren(s) { 

  // eff. rotation pos.: distance rotor pos. from initial wiring pos.
  // i.e. <dist. rotor pos. from initial pos.> - <dist. wiring from its initial pos.>
  var rw1 = wout[1]-65 -r[1]; if (rw1 < 0) rw1+= 26;
  var rw2 = wout[2]-65 -r[2]; if (rw2 < 0) rw2+= 26;
  var rw3 = wout[3]-65 -r[3]; if (rw3 < 0) rw3+= 26;
  var rwu = wout[0]-65 -r[0]; if (rwu < 0) rwu+= 26;
  document.getElementById('status2').innerHTML= rwu+' '+rw3+' '+rw2+' '+rw1;

  // Plug or Uhr on entry?
  var s0 = (stecker)? swp.charAt(abc.indexOf(s)) : s;

  var se = etw.charAt(abc.indexOf(s0));
  var s1 = w[1].charAt( abc.indexOf(se) );  // (ETW is fixed)
  var s2 = w[2].charAt( (abc.indexOf(s1) -rw1 +26) %26 );
  var s3 = w[3].charAt( (abc.indexOf(s2) -rw2 +26) %26 );
  var su = w[0].charAt( (abc.indexOf(s3) -rw3 +26) %26 ); //UKW (M4: Greek wheel!)
  if (ukm4 !='') { //(M4: thin UKW)
    var thin = ukm4.charAt( (abc.indexOf(su) -rwu +26) % 26 ), sg = su;
    su = abc.charAt( w[0].indexOf(abc.charAt((abc.indexOf(thin) +rwu) % 26)) );
  }
  if (monitor) {
    signal('sg6',abc.indexOf(s),dwn); signal('sg5',abc.indexOf(s0),dwn); signal('sg4',abc.indexOf(se),dwn); signal('sg1',(abc.indexOf(s1)-rw1+26)%26,dwn); signal('sg2',(abc.indexOf(s2)-rw2+26)%26,dwn); signal('sg3',(abc.indexOf(s3)-rw3+26)%26,dwn);
    if (ukm4 !='') signal('sg0',(abc.indexOf(sg)-rwu+26)%26,dwn);
  }

  if (ukm4=='' && ukwset==true)
    s3 = abc.charAt( w[3].indexOf(abc.charAt((abc.indexOf(su) -rwu +26 +rw3) % 26)) ); 
  else
    s3 = abc.charAt( w[3].indexOf(abc.charAt((abc.indexOf(su) +rw3) % 26)) );
  s2 = abc.charAt( w[2].indexOf(abc.charAt((abc.indexOf(s3) +rw2) % 26)) );
  s1 = abc.charAt( w[1].indexOf(abc.charAt((abc.indexOf(s2) +rw1) % 26)) );
  se = abc.charAt( etw.indexOf(s1) ); 

  // Plug/Uhr on exit?
  s0= (stecker)? abc.charAt(swp.indexOf(se)) : se;

  if (monitor) {
    if (ukm4 !='') { signal('sg0',abc.indexOf(thin),up); signal('sg3',abc.indexOf(su),up); } else signal('sg3',(abc.indexOf(su)-rwu+26)%26,up);
    signal('sg2',abc.indexOf(s3),up); signal('sg1',abc.indexOf(s2),up); signal('sg4',abc.indexOf(s1),up); signal('sg5',abc.indexOf(se),up); signal('sg6',abc.indexOf(s0),up);
  }

  return s0;
}


function rot (w,n) { 
  return (n>-1)? w.substr(n)+ w.substr(0,n) : w.substr(w.length +n) + w.substring(0, w.length +n);
}

function rng (w,n,m) { //exact rotation of inner wiring (=ringsetting), for monitor
  for (var i=0; i<26; i++) {
    var s= (w.charCodeAt(i)-97 +m +26) % 26;
    w= w.substr(0,i) + String.fromCharCode(s+97) +w.substr(i+1);
  }
  return rot(w,n-m);
}

