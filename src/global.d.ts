/**
 * Most of this is from:
 * https://github.com/ErnstHot/TypeScript-for-Max/tree/master/TypeScript/types
 *
 * Documentation is property of Cycling '74 and published with permission.
 * Some parts of these definitions have been completed by AI (Copilot and ChatGPT).
 */


/*
 * Max globals
 * https://docs.cycling74.com/max7/vignettes/jsglobal 
 */ 

declare var inlets: number;
declare var outlets: number;
declare var autowatch: number;
declare var jsarguments: any[];
declare var arguments: IArguments;
declare var box: Maxobj;
declare var editfontsize: number;
declare var inlet: number;
declare var max: Max;
declare var maxclass: string;
declare var messagename: string;
declare var patcher: Patcher;
declare function error(...message: any): void;
declare function cpost(...message?: any): void;
declare function post(...message?: any): void;
declare function messnamed(object_name: string, message_name: string, message_arguments?: string): void;
/**
 * A utility for writing functions that take a variable number of arguments, and/or those that can be called using various messages (such as an anything function).
 * The Function object has an arguments property that can be numerically indexed like an Array but is not an instance of Array.
 * 
 * This means that you cannot call Array functions such as sort() on the arguments property,
 * or send the arguments property out an outlet as a list of values.
 * 
 * The arrayfromargs() method will convert the arguments property to an Array, optionally with message as the zeroth element of the array.
 * This message usage is useful for processing messages as though they are lists beginning with a symbol, as would be typical in your
 * anything function. Here is an example of a function that allows its arguments to be sorted.
 * 
 * Note that messagename is a property of the jsthis object that returns the name of the message that invoked the function.
 * @param arguments 
 */
declare function arrayfromargs(arguments: IArguments): any[];
/**
 * Sets the patcher assist string for a designated inlet or outlet of a js object box.
 * Designed to be called from the assistance function specified as an argument to the setinletassist() or setoutletassist()
 * method (see example under setoutletassist() below).
 * @param {any} arguments The arguments to pass to the function.
 */
declare function assist(arguments: any): void;
/**
 * Declare an attribute which can be set, queried, and optionally stored in the patcher file.
 * The attributename, argument is required, but the following arguments are optional.
 * If no getterr or setter methods are specified, default ones will be used.
 * These attributes can also be referenced by pattr.
 * @param {string} attribute_name The name of the attribute.
 * @param {string} getter_name The name of the getter function.
 * @param {string} setter_name The name of the setter function.
 * @param {number} embed The embed argument is used to specify whether the attribute should be stored in the patcher file.
 */
declare function declareattribute(attribute_name: string, getter_name?: string, setter_name?: string, embed?: number): void;
/**
 * The embedmessage method works only inside of your save() function.
 * You use it to specify the name of a function you want to be called when the js object containing your script is recreated.
 * The function name must be given as a string, followed by the arguments you wish to pass to the function.
 * These arguments will typically be numbers, arrays, or strings (Javascript objects cannot be used in this context)
 * and will reflect the current state of your object.
 * @param {string} method_name The name of the function to call when the js object is recreated.
 * @param {any} arguments The arguments to pass to the function.
 */
declare function embedmessage(method_name: string, ...arguments: any[]): void;
/**
 * Notifies any clients (such as the pattr family of objects), that the object’s current value has changed.
 * Clients can then take appropriate action such as sending a js instance the message getvalueof to invoke the getvalueof()
 * method (if defined – see the special function names listed above for more information).
 * The notifyclients() method is useful for objects that define setvalueof() and getvalueof() functions for pattr compatibility.
 */
declare function notifyclients(): void;
/**
 * Sends the data after the first argument out the outlet specified by the outlet_number.
 * 0 refers to the leftmost outlet. If the outlet_number is greater than the number of outlets, no output occurs.
 * @param {number} outlet_number The outlet number. 0 refers to the leftmost outlet. If the outlet_number is greater than the number of outlets, no output occurs.
 * @param {any} arguments The data to send out the outlet.
 */
declare function outlet(outlet_number: number, ...arguments: any[]): void;
/**
 * Associates either a number, string, or function with the numbered inlet (starting at 0 for the left inlet).
 * If -1 is passed as the inlet number, the object argument is used for all inlets.
 * @param {number} inlet_number The inlet number. If -1 is passed as the inlet number, the object argument is used for all inlets.
 * @param {number | string | Function} object The object to associate with the inlet.
 */
declare function setinletassist(inlet_number: number, object: number | string | (() => void)): void;
/**
 * Associates either a number, string, or function with the numbered outlet (starting at 0 for the left outlet).
 * If -1 is passed as the outlet number, the object argument is used for all outlets.
 * @param {number} outlet_number The outlet number. If -1 is passed as the outlet number, the object argument is used for all outlets.
 * @param {number | string | Function} object The object to associate with the outlet.
 */
declare function setoutletassist(outlet_number: number, object: number | string | (() => void)): void;
declare var mgraphics: MGraphics;
declare var sketch: Sketch;

/**
 * Refreshes the jsui window.
 */
declare function refresh(): void;
/**
 * Declare a click handler.
 * @param {number} x X coordinate of the click.
 * @param {number} y Y coordinate of the click.
 * @param {number} button Button number.
 * @param {MaxBoolean} modifier1 The command key state on Macintosh, and the control key state on PC
 * @param {MaxBoolean} shift The shift key state.
 * @param {MaxBoolean} capslock The caps lock key state.
 * @param {MaxBoolean} option The option key state on Macintosh, and the alt key state on PC.
 * @param {MaxBoolean} modifier2 The control key state on Macintosh, and the right button state on PC
 */
declare function onclick(x: number, y: number, button: number, modifier1: number, shift: number, capslock: number, option: number, modifier2: number): void;
/**
 * Declare a double click handler.
 * @param {number} x X coordinate of the click.
 * @param {number} y Y coordinate of the click.
 * @param {number} button Button number.
 * @param {MaxBoolean} modifier1 The command key state on Macintosh, and the control key state on PC
 * @param {MaxBoolean} shift The shift key state.
 * @param {MaxBoolean} capslock The caps lock key state.
 * @param {MaxBoolean} option The option key state on Macintosh, and the alt key state on PC.
 * @param {MaxBoolean} modifier2 The control key state on Macintosh, and the right button state on PC
 */
declare function ondblclick(x: number, y: number, button: number, modifier1: number, shift: number, capslock: number, option: number, modifier2: number): void;
/**
 * Declare a drag handler.
 * @param {number} x X coordinate of the click.
 * @param {number} y Y coordinate of the click.
 * @param {number} button Button number.
 * @param {MaxBoolean} modifier1 The command key state on Macintosh, and the control key state on PC
 * @param {MaxBoolean} shift The shift key state.
 * @param {MaxBoolean} capslock The caps lock key state.
 * @param {MaxBoolean} option The option key state on Macintosh, and the alt key state on PC.
 * @param {MaxBoolean} modifier2 The control key state on Macintosh, and the right button state on PC
 */
declare function ondrag(x: number, y: number, button: number, modifier1: number, shift: number, capslock: number, option: number, modifier2: number): void;
/**
 * Declare an idle handler.
 * @param {number} x X coordinate of the click.
 * @param {number} y Y coordinate of the click.
 * @param {number} button Button number.
 * @param {MaxBoolean} modifier1 The command key state on Macintosh, and the control key state on PC
 * @param {MaxBoolean} shift The shift key state.
 * @param {MaxBoolean} capslock The caps lock key state.
 * @param {MaxBoolean} option The option key state on Macintosh, and the alt key state on PC.
 * @param {MaxBoolean} modifier2 The control key state on Macintosh, and the right button state on PC
 */
declare function onidle(x: number, y: number, button: number, modifier1: number, shift: number, capslock: number, option: number, modifier2: number): void;
/**
 * Declare an idle out handler.
 * @param {number} x X coordinate of the click.
 * @param {number} y Y coordinate of the click.
 * @param {number} button Button number.
 * @param {MaxBoolean} modifier1 The command key state on Macintosh, and the control key state on PC
 * @param {MaxBoolean} shift The shift key state.
 * @param {MaxBoolean} capslock The caps lock key state.
 * @param {MaxBoolean} option The option key state on Macintosh, and the alt key state on PC.
 * @param {MaxBoolean} modifier2 The control key state on Macintosh, and the right button state on PC
 */
declare function onidleout(x: number, y: number, button: number, modifier1: number, shift: number, capslock: number, option: number, modifier2: number): void;
/**
 * Declare a resize handler.
 * @param {number} width The new width of the jsui object.
 * @param {number} height The new height of the jsui object.
 */
declare function onresize(width: number, height: number): void;

/**
 * The Buffer object in JavaScript is a companion to the buffer~ object you instantiate in Max patchers, and provides the ability to access samples and metadata for the buffer~ object with the associated name.
 * https://docs.cycling74.com/max7/vignettes/jsbuffer
 */
declare class Buffer {
	/**
	 * [constructor description]
	 * @param {string} name The name is required at the time the object is created.
	 */
	constructor(name: string);

	/**
	 * Return the number of channels in the buffer~ object.
	 * @type {number}
	 */
	channelcount: number;

	/**
	 * Return the number of frames (samples in a single channel) in the buffer~ object.
	 * @type {number}
	 */
	framecount: number;

	/**
	 * Return the length of the buffer~ object in milliseconds.
	 * @type {number}
	 */
	length: number; 	

	/**
	 * Return an array with count samples from channel (1-based counting) starting at frame (zero-based counting).
	 * @param  {number}   channel 
	 * @param  {number}   frame   
	 * @param  {number}   count   
	 * @return {number[]}
	 */
	peek(channel: number, frame: number, count: number): number[]; 	

	/**
	 * Write into the buffer~ object at channel (1-based counting) and frame (0-based counting). Samples may be a single sample value or an array of sample values. It is computationally more efficient to use an array).
	 * @param {number}    channel
	 * @param {number}    frame
	 * @param {number | number[]}	samples
	 */
	poke(channel: number, frame: number, samples: number | number[]): void; 	

	/**
	 * Send a message to the associated buffer~ object. Can send any message that buffer~ understands.
	 * @param {string} message_name         [description]
	 * @param {any[]}  ...message_arguments [description]
	 */
	send(message_name: string, ...message_arguments: any[]): void;
}


/**
 * The Dict object in JS is a companion to the dict object you create in a Max patcher. It provides the ability to access structured data (a dictionary) associated with a name.
 * Example code can be found in the "js" tab of the dict help patcher.
 * https://docs.cycling74.com/max7/vignettes/jsdict
 */
declare class Dict {
	/**
	 * If no name is provided as an argument then a unique name will be generated for the dictionary.
	 * The following properties mirror the attributes of the same name from the Max dict object. See the dict reference for more details.
	 * @param {string} name [description]
	 */
	constructor(name: string);

	/**
	 * Access or set the name of a dict object as a property of the dict object
	 * @type {string}
	 */
	name: string;

	/**
	 * The quiet property functions the same as the @quiet attribute to dict in Max. It suppresses many errors or warnings if set to true.
	 * @type {boolean}
	 */
	quiet: boolean; 	

	/**
	 * Add values to the end of an array associated with the specified key.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	append(key: string, value: any[]): void;

	/**
	 * Erase the contents of the dictionary, restoring to a clean state
	 */
	clear(): void;

	/**
	 * Make a clone of the incoming dictionary.
	 * @param {string} name [symbol]
	 */
	clone(name: string): void;

	/**
	 * Return a 0 or 1 indicating the specified key exists (or doesn't) in the dictionary.
	 * @param  {string} key    [symbol]
	 * @return {number}        [description]
	 */
	contains(key: string): number;

	/**
	 * Return the value associated with a key.
	 * @param  {string} key    [symbol]
	 * @return {any}           [description]
	 */
	get(key: string): any;
	
	/**
	 * Return a list of all the keys in a dictionary.
	 * @return {any[]} [description]
	 */
	getkeys(): any[];

	/**
	 * Return a list of all the dictionaries that currently exist.
	 * @return {string[]} [description]
	 */
	getnames(): string[];	

	/**
	 * Return the number of values associated with a key.
	 * @return {number} [description]
	 */
	getsize(): number;	

	/**
	 * Return the type of the values associated with a key.
	 * @return {string} [description]
	 */
	gettype(): string;	

	/**
	 * Replace the content of a dictionary.
	 * @param {string} key   [symbol]
	 * @param {string} value [symbol]
	 */
	parse(key: string, value: string): void;	

	/**
	 * Pull the content of a named coll object into the dictionary.
	 * @param {string} coll_name [symbol]
	 */
	pull_from_coll(coll_name: string): void;	

	/**
	 * Push the dictionary's content into a named coll object. The keys in the dictionary will become the indices in the coll, and the values for those indices the values of the dictionary's keys.
	 * @param {string} coll_name [symbol]
	 */
	push_to_coll(coll_name: string): void;	

	/**
	 * Read the dictionary contents from a file.
	 * @param {string} filename [symbol]
	 */
	readany(filename: string): void;	

	/**
	 * Remove a key and its associated value from the dictionary.
	 * @param {string} key [symbol]
	 */
	remove(key: string): void;	

	/**
	 * Set the value for a key to a specified value, creating heirarchy.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	replace(key: string, value: any[]): void;	

	/**
	 * Set the value for a key to a specified value.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	set(key: string, value: any[]): void;	

	/**
	 * Set the value for a key to dictionary content defined using JSON.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	setparse(key: string, value: any[]): void;

	/**
	 * Open a save dialog to write the dictionary contents to a file.
	 */
	writeagain(): void;	

	/**
	 * Return the content of the dictionary as a JSON string.
	 * @return {string} [description]
	 */
	stringify(): string;	

	/**
	 * Read a file from disk in the JSON format.
	 * @param {string} filename [symbol]
	 */
	import_json(filename: string): void;	

	/**
	 * Write a file to disk in the JSON format.
	 * @param {string} filename [symbol]
	 */
	export_json(filename: string): void;	

	/**
	 * Read a file from disk in the YAML format.
	 * @param {string} filename [symbol]
	 */
	import_yaml(filename: string): void;	

	/**
	 * Write a file to disk in the YAML format.
	 * @param {string} filename [symbol]
	 */
	export_yaml(filename: string): void;
}


/**
 * The File object provides a means of reading and writing files from Javascript.
 * https://docs.cycling74.com/max7/vignettes/jsfileobject
 */
declare class File {
	/**
	 * filename can be a file in the Max search path, an absolute path, or a relative path. Acceptable values for access can be "read", "write", or "readwrite". The default value for access is "read". Acceptable values for typelist are four character filetype codes listed in the file max-fileformats.txt, which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows. By default, typelist is empty. If able to, the File constructor opens the file specified by filename, provided it is one of the types in typelist.
	 * @param {string} filename [description]
	 * @param {string} access   [description]
	 * @param {string} typelist [description]
	 */
	constructor(filename: string, access: string, typelist: string);

	/**
	 * File access permissions: "read", "write", or "readwrite". By default, this value is "read".
	 * @type {string}
	 */
	access: string;
	
	/**
	 * The assumed file byteorder (endianness): "big", "little", or "native". By default, this value is "native".
	 * @type {string}
	 */
	byteorder: string;

	/**
	 * The location of the end of file, in bytes.
	 * @type {number}
	 */
	eof: number;

	/**
	 * The current filename.
	 * @type {string}
	 */
	filename: string;

	/**
	 * The four-character code associated. See Filetypes Recognized in Max for possible values.
	 * (In Max 7 documentation, Filetypes link points to the wrong page. This has been reported.)
	 * @type {string}
	 */
	filetype: string;

	/**
	 * The absolute path to parent folder.
	 * @type {string}
	 */
	foldername: string;

	/**
	 * Return a true/false indicating if the File constructor is successful in finding and opening the file.
	 * @type {boolean}
	 */
	isopen: boolean;

	/**
	 * The line break convention to use when writing lines: "dos", "mac", "unix", or "native". By default, this value is "native".
	 * @type {string}
	 */
	linebreak: string;

	/**
	 * The current file position, in bytes.
	 * @type {number}
	 */
	position: number;

	/**
	 * An array file type codes to filter by when opening a file. By default, this is the empty array.
	 * @type {string[]}
	 */
	typelist: string[];

	/**
	 * Opens the file specified by the filename argument. If no argument is specified, it will open the last opened file.
	 * @param {string} filename [description]
	 */
	open(filename?: string): void;

	/**
	 * Closes the currently open file.
	 */
	close(): void; // TODO: Docs say string [symbol] ???

	/**
	 * Writes the characters contained in the string argument as characters to the file, starting at the current file position, and inserts a line break appropriate to the linebreak property. The file position is updated accordingly.
	 * @param {string} characters [description]
	 */
	writeline(characters: string): void;

	/**
	 * Reads and returns a string containing up to maximum_count characters or up to the first line break as read from the file, starting at the current file position. The file position is updated accordingly.
	 * @param  {number} maximum_count [description]
	 * @return {string}               [description]
	 */
	readline(maximum_count: number): string;

	/**
	 * Writes the characters contained in the string argument as characters to the file, starting at the current file position. Unlike writeline(), no line break is inserted. The file position is updated accordingly.
	 * @param {string} characters [description]
	 */
	writestring(characters: string): void;

	/**
	 * Reads and returns a string containing up to char_count characters as read from the file, starting at the current file position. Unlike readline(), line breaks are not considered. The file position is updated accordingly.
	 * @param  {number} char_count [description]
	 * @return {string}            [description]
	 */
	readstring(char_count: number): string;

	/**
	 * Writes the numbers contained in the byte_array argument as bytes to the file, starting at the current file position. The file position is updated accordingly.
	 * @param {number[]} byte_array [description]
	 */
	writebytes(byte_array: number[]): void;

	/**
	 * Reads and returns an array containing up to byte_count numbers, read as bytes from the file, starting at the current file position. The file position is updated accordingly.
	 * @param  {number}   byte_count [description]
	 * @return {number[]}            [description]
	 */
	readbytes(byte_count: number): number[];

	/**
	 * Writes the single character strings contained in the char_array argument as characters to the file, starting at the current file position. The file position is updated accordingly.
	 * @param {string[]} char_array [description]
	 */
	writechars(char_array: string[]): void;

	/**
	 * Reads and returns an array containing the single character strings, read as characters from the file, starting at the current file position. The file position is updated accordingly.
	 * @param  {number}   char_count [description]
	 * @return {string[]}            [description]
	 */
	readchars(char_count: number): string[];

	/**
	 * Writes the numbers contained in the int16_array argument as signed 16-bit integers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int16_array [description]
	 */
	writeint16(int16_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as signed 16-bit integers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   int16_count [description]
	 * @return {number[]}             [description]
	 */
	readint16(int16_count: number): number[];

	/**
	 * Writes the numbers contained in the int32_array argument as signed 32-bit integers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int32_array [description]
	 */
	writeint32(int32_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as signed 32-bit integers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   int32_count [description]
	 * @return {number[]}             [description]
	 */
	readint32(int32_count: number): number[];

	/**
	 * Writes the numbers contained in the float32_array argument as 32-bit floating point numbers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int32_array [description]
	 */
	writefloat32(int32_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as 32-bit floating point numbers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   float32_count [description]
	 * @return {number[]}               [description]
	 */
	readfloat32(float32_count: number): number[];

	/**
	 * Writes the numbers contained in the float64_array argument as 64-bit floating point numbers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int64_array [description]
	 */
	writefloat64(int64_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as 64-bit floating point numbers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   float64_count [description]
	 * @return {number[]}               [description]
	 */
	readfloat64(float64_count: number): number[];
}


/**
 * The Folder object is a js “external object” defined in the Max object called jsfolder. It is used to iterate through files in a folder.
 * https://docs.cycling74.com/max7/vignettes/jsfolderobject
 */
declare class Folder {
	/**
	 * pathname can either be the name of a folder in the search path or a complete pathname using Max path syntax.
	 * @param {string} pathname [description]
	 */
	constructor(pathname: string);

	/**
	 * Non-zero (true) if there are no more files to examine in the folder, or if the pathname argument to the Folder object didn’t find a folder.
	 * @type {boolean}
	 */
	end: boolean;

	/**
	 * The total number of files of the specified type(s) contained in the folder.
	 * @type {number}
	 */
	count: number;

	/**
	 * The full pathname of the folder
	 * @type {string}
	 */
	pathname: string;

	/**
	 * The list of file types that will be used to find files in the folder. To search for all files (the default), set the typelist property to an empty array.
	 * @type {string[]}
	 */
	typelist: string[];

	/**
	 * The name of the current file.
	 * @type {string}
	 */
	filename: string;

	/**
	 * An array containing the values year, month, day, hour, minute, and second with the last modified date of the current file. These values can be used to create a Javascript Date object.
	 * @type {number[]}
	 */
	moddate: number[];

	/**
	 * The four-character code associated with the current file's filetype. These codes are listed in the file max-fileformats.txt, which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows. If there is no mapping for the file's extension, a nil value is returned.
	 * @type {string}
	 */
	filetype: string;

	/**
	 * The extension of the current file's name, including the period. If there are no characters after the period, a nil value is returned.
	 * @type {string}
	 */
	extension: string;

	/**
	 * [reset description]
	 * Documentation is faulty, this has been reported.
	 */
	reset(): void;

	/**
	 * Start iterating at the beginning of the list of files. Re-opens the folder if it was previously closed with the close() function.
	 */
	append(): void;

	/**
	 * Moves to the next file.
	 */
	next(): void;

	/**
	 * Closes the folder. To start using it again, call the reset() function.
	 */
	close(): void;
}


/**
 * The Global object is a fairly generic Javascript object that allows you to share data among js instances by adding and accessing properties. You can also access Global object properties from Max messages completely outside of js. Executing methods stored in Global objects from Max is not supported. However, methods are certainly among the kinds of things you can store within a Global object.
 * A Global is basically a reference to a Javascript object that you can't access directly. The object is connected to the Max symbol with the name you supplied as an argument (this allows it to be accessed from Max). Every time you access a Global, it hands off the access to the secret hidden Javascript object. This means you can create any number of Global objects in your code, in any number of js instances, and if they all have the same name, they will all share the same data. In this way, a Global resembles a namespace.
 * https://docs.cycling74.com/max7/vignettes/jsglobalobject
 */
declare class Global {

	/**
	 * name represents a String that uniquely identifies the Global.
	 * @param {string} name [description]
	 */
	constructor(name: string);

	/**
	 * Sends the value of the named property property_name to the named Max receive object (or other Max object) bound to the specified receive_name symbol.
	 * TODO: Can have any property assigned to it
	 * @param {string} receive_name  [description]
	 * @param {string} property_name [description]
	 */
	sendnamed(receive_name: string, property_name: string): void;
}


/**
 * The LiveAPI object provides a means of communicating with the Live API functions from JavaScript. For background information on this functionality, please see the Live API Overview and Live Object Model documents, as well as the Reference pages for live.path, live.object and live.observer objects, which provide the same basic functionality as the LiveAPI object, but from the Max patcher.
 * https://docs.cycling74.com/max7/vignettes/jsliveapi
 */
declare class LiveAPI {

	/**
	 * callback is an optional JavaScript function. This function will be called when the LiveAPI object refers to a new object in Live (if the LiveAPI object's path change, for instance), or when an observed property changes. path refers to the object in Live "pointed to" by the LiveAPI object (e.g. "live_set tracks 0 devices 0"). Alternately, a valid id can be used to refer a LiveAPI object to an object in Live.
	 * Technical note: you cannot use the LiveAPI object in JavaScript global code. Use the live.thisdevice object to determine when your Max Device has completely loaded (the object sends a bang from its left outlet when the Device is fully initialized, including the Live API).
	 * Legacy note: previous versions of the LiveAPI object required the jsthis object's this.patcher property as the first argument. For backward-compatibility, this first argument is still supported, but is no longer necessary.
	 * @param {any}    callback [description]
	 * @param {string} name     [description]
	 */
	constructor(callback: any, name: string);
	
	/**
	 * The id of the Live object referred to by the LiveAPI object. These ids are dynamic and awarded in realtime from the Live application, so should not be stored and used over multiple runs of Max for Live.
	 * @type {number}
	 */
	id: number;

	/**
	 * The path to the Live object referred to by the LiveAPI object. These paths are dependent on the currently open Set in Live, but are otherwise stable: live_set tracks 0 devices 0 will always refer to the first device of the first track of the open Live Set.
	 * @type {string}
	 */
	path: string;

	/**
	 * The path to the Live object referred to by the LiveAPI object, without any quoting (the path property contains a quoted path). These paths are dependent on the currently open Set in Live, but are otherwise stable: live_set tracks 0 devices 0 will always refer to the first device of the first track of the open Live Set.
	 * @type {string}
	 */
	unquotedpath: string;

	/**
	 * An array of children of the object at the current path.
	 * @type {string[]}
	 */
	children: string[];

	/**
	 * The follow mode of the LiveAPI object. 0 (default) means that LiveAPI follows the object referred to by the path, even if it is moved in the Live user interface. For instance, consider a Live Set with two tracks, "Track 1" and "Track 2", left and right respectively. If your LiveAPI object's path is live_set tracks 0, the left-most track, it will refer to "Track 1". Should the position of "Track 1" change, such that it is now to the right of "Track 2", the LiveAPI object continues to refer to "Track 1". A mode of 1 means that LiveAPI updates the followed object based on its location in the Live user interface. In the above example, the LiveAPI object would always refer to the left-most track, updating its id when the object at that position in the user interface changes.
	 * @type {number}
	 */
	mode: number;

	/**
	 * The type of the object at the current path. Please see the Live API Overview and Live Object Model documents for more information.
	 * @type {string}
	 */
	type: string;

	/**
	 * A description of the object at the current path, including id, type, children, properties and functions.
	 * @type {string}
	 */
	info: string;

	/**
	 * The observed property, child or child-list of the object at the current path, if desired. For instance, if the LiveAPI object refers to "live_set tracks 1", setting the property to "mute" would cause changes to the "mute" property of the 2nd track to be reported to the callback function defined in the LiveAPI Constructor.
	 * @type {string}
	 */
	property: string;

	/**
	 * The type of the currently observed property or child. The types of the properties and children are given in the Live Object Model.
	 * @type {string}
	 */
	proptype: string;

	/**
	 * The patcher of the LiveAPI object, as passed into the Constructor.
	 * @type {any}
	 */
	patcher: any;

	/**
	 * The count of children of the object at the current path, as specified by the child argument.
	 * @param  {string} child [description]
	 * @return {number}       [description]
	 */
	getcount(child: string): number;	

	/**
	 * Navigates to the path and causes the id of the object at that path out be sent to the callback function defined in the Constructor. If there is no object at the path, id 0 is sent.
	 * @param {string} path [description]
	 */
	goto(path: string): void;

	/**
	 * Returns the value or list of values of the specified property of the current object.
	 * @param  {string} property [description]
	 * @return {any}             [description]
	 */
	get(property: string): any;

	/**
	 * Returns the value or list of values of the specified property of the current object as a String object.
	 * @param  {string} property [description]
	 * @return {any}             [description]
	 */
	getstring(property: string): any;

	/**
	 * Sets the value or list of values of the specified property of the current object.
	 * @param {string} property [description]
	 * @param {any}    value    [description]
	 */
	set(property: string, value: any): void;

	/**
	 * Calls the given function of the current object, optionally with a list of arguments.
	 * @param {string} func [description]
	 * @param {any}    args [description]
	 */
	call(func: string, args: any): void;
}


/**
 * The Max object can be accessed as a property of a jsthis object. Any message you can send to the max object using the semicolon notation in a message box can be invoked within Javascript using Javascript syntax.
 * http://max-javascript-reference.tim-schenk.de/symbols/max.html
 */
declare class Max {
	/**
	 * The pathname of the Max application
	 * @type {string}
	 */
	readonly appath: string;

	/**
	 * 1 if the command (Macintosh) or control (Windows) key is currently held down
	 * @type {number}
	 */
	readonly cmdkeydown: number;

	/**
	 * 1 if the control key is currently held down
	 * @type {number}
	 */
	readonly ctrlkeydown: number; 	

	/**
	 * [db description]
	 * TODO: max.db?
	 * @type {any}
	 */
	readonly db: any; 

	/**
	 * The Patcher object of the frontmost patcher window, or a nil value if no patcher window is visible.
	 * @type {Patcher}
	 */
	readonly frontpatcher: Patcher;

	/**
	 * 1 if the js object is within a plug-in; note that this would be 1 if the js object was within a plug-in loaded into the vst~ object in Max.
	 * @type {number}
	 */
	readonly isplugin: number;

	/**
	 * 1 if the currently executing Max application environment does not allow editing, 0 if it doe
	 * @type {number}
	 */
	readonly isruntime: number;

	/**
	 * 1 if the user has disabled loadbang for the currently loading patch. If your object implements a loadbang method, it can test this property and choose to do nothing if it is true.
	 * @type {number}
	 */
	readonly loadbangdisabled: number;

	/**
	 * 1 if the option (Macintosh) or alt (Windows) key is currently held down
	 * @type {number}
	 */
	readonly optionkeydown: number;

	/**
	 * The name of the platform (e.g., “windows” or “macintosh”)
	 * @type {string}
	 */
	readonly os: string;

	/**
	 * The current OS version number.
	 * @type {string}
	 */
	readonly osversion: string;

	/**
	 * 1 if the shift key is currently held down
	 * @type {number}
	 */
	readonly shiftkeydown: number;

	/**
	 * The current scheduler time in milliseconds - will be a floating-point value.
	 * @type {number}
	 */
	readonly time: number;

	/**
	 * The version of the Max application, in the following form: "451"
	 * @type {string}
	 */
	readonly version: string;

	/**
	 * The word buildcollective, followed by a reference name symbol and an output filename, builds a collective using the patcher associated with the symbol. The collective is named with the output filename.
	 * @param {string} name     [description]
	 * @param {string} filename [description]
	 */
	buildcollective(name: string, filename: string): void;

	/**
	 * The word checkpreempt, followed by a symbol, sends the current Overdrive mode to the receive object named by the symbol.
	 * @param {string} receive_object [description]
	 */
	checkpreempt(receive_object: string): void;

	/**
	 * Causes Max not to show a Save Changes dialog when you close a window or quit, even if there are windows that have been modified. This is useful in conjunction with the quit message below.
	 */
	clean(): void;

	/**
	 * The word closefile, followed by a symbol, closes the patcher file previously opened with the openfile message to Max associated with the symbol.
	 * @param {string} symbol [description]
	 */
	closefile(symbol: string): void;

	/**
	 * The word debug, followed by a zero or one, toggles the sending of Max's internal debugging output to the Max window. Debug information may be of limited use for anyone who isn't debugging Max itself.
	 * @param {0 | 1} enable [description]
	 */
	debug(enable: 0 | 1): void;

	/**
	 * The word enablepathcache, followed by a zero or one, turns on (or off) Max's search path cache. This should only be done if you noticed unusual behavior when opening files.
	 * @param {0 | 1} enable [description]
	 */
	enablepathcache(enable: 0 | 1): void;

	/**
	 * (Macintosh only) The word enablerefresh, followed by a zero or one, toggles an alternative to the standard way in which the screen contents are updated, resulting in better visual performance. This feature is enabled by default. The rate at which refresh is done can be set by using the setrefreshrate message.
	 * @param {0 | 1} enable [description]
	 */
	enablerefresh(enable: 0 | 1): void;

	/**
	 * List all of the external objects currently loaded in the Max window.
	 */
	externs(): void;

	/**
	 * The word fileformat, followed by two symbols that specify a file extension and a four-character file type, tells Max to associate a filename extension with a particular filetype. The message max fileformat .tx TEXT associates the extension .tx with TEXT (text) files. This allows a user to send a message read george and locate a file with the name george.tx. It also ensures that files with the extension .tx will appear in a standard open file dialog where text files can be chosen.
	 * @param {string} extension [description]
	 * @param {string} filetype  [description]
	 */
	fileformat(extension: string, filetype: string): void;

	/**
	 * The word fixwidthratio, followed by a floating-point number, sets the ratio of the box to the width of the text when the user chooses Fix Width from the Object menu. The default value is 1.0. A value of 1.1 would make boxes wider than they needed to be, and a value of 0.9 would make boxes narrower than they need to be.
	 * @param {number} ratio [description]
	 */
	fixwidthratio(ratio: number): void;

	/**
	 * The word getdefaultpatcherheight followed by a symbol used as the name of a receive object, causes Max to report the current default patcher height in pixels to the named receive object (See also the setdefaultpatcherheight message to Max.)
	 * @param {string} object_name [description]
	 */
	getdefaultpatcherheight(object_name: string): void;

	/**
	 * The word getdefaultpatcherwidth, followed by a symbol used as the name of a receive object, causes Max to report the current default patcher width in pixels to the named receive object (See also the setdefaultpatcherwidth message to Max.)
	 * @param {string} object_name [description]
	 */
	getdefaultpatcherwidth(object_name: string): void;

	/**
	 * The word getenablepathcache, followed by a symbol used as the name of a receive object, will report whether the path cache is enabled to the named receive object. (See also the enablepathcache message to Max.)
	 * @param {string} object_name [description]
	 */
	getenablepathcache(object_name: string): void;

	/**
	 * (Macintosh only.) The word getenablerefresh, followed by a symbol used as the name of a receive object, will report whether enhanced refresh is enabled to the named receive object. (See also the enablerefresh message to Max.)
	 * @param {string} object_name [description]
	 */
	getenablerefresh(object_name: string): void;

	/**
	 * The word geteventinterval, followed by a symbol used as the name of a receive object, will report the event interval to the named receive object. (See also the seteventinterval message to Max.)
	 * @param {string} object_name [description]
	 */
	geteventinterval(object_name: string): void;

	/**
	 * The word getfixwidthratio, followed by a symbol used as the name of a receive object, reports the current fix with ratio value to the named receive object. (See also the fixwidthratio message to Max.)
	 * @param {string} object_name [description]
	 */
	getfixwidthratio(object_name: string): void;

	/**
	 * The word getpollthrottle, followed by a symbol used as the name of a receive object, reports the current poll throttle value to the named receive object. (See also the setpollthrottle message to Max.)
	 * @param {string} object_name [description]
	 */
	getpollthrottle(object_name: string): void;

	/**
	 * The word getqueuethrottle, followed by a symbol used as the name of a receive object, causes Max to report the current queue throttle value to the named receive object. (See also the setqueuethrottle message to Max.)
	 * @param {string} object_name [description]
	 */
	getqueuethrottle(object_name: string): void;
	
	/**
	 * (Macintosh only) The word getrefreshrate, followed by a symbol used as the name of a receive object, causes Max to report the current refresh rate in Hertz to the named receive object. (See also the setrefreshrate message to Max.)
	 * @param {string} object_name [description]
	 */
	getrefreshrate(object_name: string): void;
	
	/**
	 * The word getruntime, followed by a symbol used as the name of a receive object,sends a 1 to the named receive object if the current version of Max is a runtime version, and a 0 if not.
	 * @param {string} object_name [description]
	 */
	getruntime(object_name: string): void;

	/**
	 * The word getsleep, followed by a symbol used as the name of a receive object, causes Max to report the sleep time to the named receive object. (See also the setsleep message to Max.)
	 * @param {string} object_name [description]
	 */
	getsleep(object_name: string): void;

	/**
	 * The word getslop, followed by a symbol used as the name of a receive object, reports the scheduler slop value to the named receive object. (See also the setslop message to Max.)
	 * @param {string} object_name [description]
	 */
	getslop(object_name: string): void;

	/**
	 * The word getqueuethrottle, followed by a symbol used as the name of a receive object, reports the maximum number of patcher UI update events processed at a time to the named receive object. (See also the setsysqelemthrottle message to Max.)
	 * @param {string} object_name [description]
	 */
	getsysqelemthrottle(object_name: string): void;

	/**
	 * The word getsystem, followed by a symbol used as the name of a receive object, will report the name of the system (macintosh or windows) to the named receive object.
	 * @param {string} object_name [description]
	 */
	getsystem(object_name: string): void;

	/**
	 * The word getversion, followed by a symbol used as the name of a receive object, will report the Max version number (e.g. 6.1.3 is reported as 1300) to the named receive object.
	 * @param {string} object_name [description]
	 */
	getversion(object_name: string): void;

	/**
	 * Hides the cursor if it is visible.
	 */
	hidecursor(): void;

	/**
	 * Hides the menu bar. Although the pull-down menus are not available when the menu bar is hidden, menu shortcut (accelerator) keys continue to work.
	 */
	hidemenubar(): void;

	/**
	 * The word htmlref, followed by an object name as a symbol, looks for a file called .html in the search path. If found, a web browser is opened to view the page.
	 * @param {string} object_name [description]
	 */
	htmlref(object_name: string): void;

	/**
	 * The word interval, followed by a number from 1 to 20, sets the timing interval of Max's internal scheduler in milliseconds. The default value is 1. This message only affects the scheduler when Overdrive is on and scheduler in audio interrupt (available with MSP) is off. (When using scheduler in audio interrupt mode the signal vector size determines the scheduler interval.) Larger scheduler intervals can improve CPU efficiency on slower computer models at the expense of timing accuracy.
	 * @param {number} value [description]
	 */
	interval(value: number): void;

	/**
	 * The word launchbrowser, followed by a URL as a symbol, opens a web browser to view the URL.
	 * @param {string} url [description]
	 */
	launchbrowser(url: string): void;

	/**
	 * The word maxcharheightforsubpixelantialiasing, followed by a number, sets a threshold font size (in points) for native subpixel aliasing. Since the look of subpixel antialiasing may be undesirable when working with large fonts as compared to regular antialiasing, this attribute lets you specify a threshold font size; if a font is larger than the specified size, it will be rendered using regular rather than subpixel antialiasing. 
	 * Note that Max honors your computer's system preferences - Max won't use subpixel aliasing if you've disabled it for your system. Setting this attribute value to zero value is 0 will always use regular antialiasing, and setting a very high value will always use subpixel antialiasing (unless it is disabled in system preferences).
	 * @param {number} points [description]
	 */
	maxcharheightforsubpixelantialiasing(points: number): void;

	/**
	 * When using the runtime version of Max *and* an active custom menubar object, maxinwmenu, followed by the number 1, will place an item called Status in the Windows menu, allowing users to see the Max window (labeled Status in the runtime version). When maxinwmenu is followed by 0 the menu item is not present. The default is for the Status item to be present in the Windows menu
	 * @param {0 | 1} enable [description]
	 */
	maxinwmenu(enable: 0 | 1): void;

	/**
	 * Displays the Max Window. If the Max window if not currently open, the window will be displayed. If the window is currently open, it will bring it to the front.
	 */
	maxwindow(): void;

	/**
	 * The word midi, followed by a variable-length message, allows messages to be sent to configure the system MIDI object.
	 * TODO: find out options
	 * @param {any[]} ...message [description]
	 */
	midi(...message: any[]): void;

	/**
	 * Prints the names of all current MIDI devices in the Max window. (See also MIDI Messages to Max.)
	 */
	midilist(): void;

	/**
	 * The word nativetextrendering, followed by a zero or one, toggles between using JUCE font rendering (0) and the platform-native font rendering for your computer (1) when displaying text in Max.
	 * @param {0 | 1} enable [description]
	 */
	nativetextrendering(enable: 0 | 1): void;

	/**
	 * (Macintosh) The word notypeinfo, followed by zero or one, sets whether Max saves files with traditional Mac OS four-character type information. By default, Max does save this information in files.
	 * @param {0 | 1} enable [description]
	 */
	notypeinfo(enable: 0 | 1): void;

	/**
	 * The word objectfile, followed by two symbols that specify an object name and a file name, creates a mapping between the external object and its filename. For example, the *~ object is in a file called times~ so at startup Max executes the command max objectfile *~ times~.
	 * @param {string} object_name [description]
	 * @param {string} file_name   [description]
	 */
	objectfile(object_name: string, file_name: string): void;

	/**
	 * The word openfile, followed by two symbols that specify an reference name and a file name or path name, attempts to open the patcher with the specified name. If successful, the patcher is associated with the reference symbol, which can be passed as argument to the buildcollective, buildplugin, and closefile messages to Max. The openfile message is intended for batch collective building.
	 * @param {string} reference_name [description]
	 * @param {string} file_name      [description]
	 */
	openfile(reference_name: string, file_name: string): void;

	/**
	 * List the current search paths in the Max window. There is a button in the File Preferences window that does this.
	 */
	paths(): void;

	/**
	 * innum specifies an input port, outnum specifies an output port, portname is the name of the port as a single symbol (i.e. It is necessary to use double quotes). An abbrev value is 0 for no abbrev (- in menu), 1 for 'a' and 26 for 'z'.
	 * @param {any[]} ...message [description]
	 */
	portabbrev(...message: any[]): void; // TODO: Documentation is unclear

	/**
	 * Enables (1) or disables (0) the port specified by portname. All ports are enabled by default.
	 * TODO: Seems to be missing a parameter
	 * @param {string} portname [description]
	 */
	portenable(portname: string) : 0 | 1;

	/**
	 * Similar to portabbrev, but offset is the channel offset added to identify input or output ports when a MIDI object can send to or receive from multiple ports by channel number. Must be a multiple of 16 (e.g. max midi portoffset innum PortA 16 sets the channel offset for PortA device to 16).
	 * @param {any[]} ...message [description]
	 */
	portoffset(...message: any[]): void;

	/**
	 * The word preempt, followed by a one (on) or zero (off), toggles Overdrive mode.
	 * @param {0 | 1} mode [description]
	 */
	preempt(mode: 0 | 1): void;

	/**
	 * The word pupdate, followed by two integer values that specify horizontal and vertical position, moves the mouse cursor to that global location.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	pupdate(x: number, y: number): void;

	/**
	 * Quits the Max application; equivalent to choosing Quit from the File menu. If there are unsaved changes to open files, and you haven't sent Max the clean message, Max will ask whether to save changes.
	 */
	quit(): void;

	/**
	 * Causes all Max windows to be updated.
	 */
	refresh(): void;

	/**
	 * (Macintosh only) The word setrefreshrate, followed by a number, sets the rate, in frames per second, at which the visual display is updated. On Macintosh systems, the rate at which the screen is refreshed is unrelated to the rate at which you change its contents. Better visual performance can be achieved - at the cost of a slight performance decrease in Jitter, and little or no performance decrease for audio processing - by specifying a higher frame rate. When enabled using the enablerefresh 1 message, the default rate is 28.57 FPS. Refresh enable is off by default.
	 * @param {number} fps [description]
	 */
	refreshrate(fps: number): void;

	/**
	 * The word runtime, followed by a zero or one and a message, executes the message if the current version of Max is a runtime version (1) or non-runtime (0).
	 * @param {0  | 1}           isRunstime [description]
	 * @param {any[]} ...message [description]
	 */
	runtime(isRunstime: 0 | 1, ...message: any[]): void;

	/**
	 * The word sendapppath, followed by a symbol, sends a symbol with the path of the Max application to the receive object named by the symbol.
	 * @param {string} object_name [description]
	 */
	sendapppath(object_name: string): void;

	/**
	 * The word sendinterval, followed by a symbol, sends the current scheduler interval to the receive object named by the symbol.
	 * @param {string} object_name [description]
	 */
	sendinterval(object_name: string): void;

	/**
	 * The word setdefaultpatcherheight, followed by an integer value greater than 100, sets the default patcher height in pixels.
	 * @param {number} height [description]
	 */
	setdefaultpatcherheight(height: number): void;

	/**
	 * The word setdefaultpatcherwidth, followed by an integer value greater than 100, sets the default patcher width in pixels.
	 * @param {number} width [description]
	 */
	setdefaultpatcherwidth(width: number): void;

	/**
	 * The word seteventinterval, followed by an integer value, sets the time between invocations of the event-level timer (The default value is 2 milliseconds). The event-level timer handles low priority tasks like drawing user interface updates and playing movies.
	 * @param {number} interval [description]
	 */
	seteventinterval(interval: number): void;

	/**
	 * The word setmirrortoconsole, followed by a 1 or 0, turns on or off (default is 0, off) mirroring of Max window posts to the system console. The system console is available on the Mac using Console.app, or on Windows using the DbgView program (free download from Microsoft).
	 * @param {0 | 1} enable [description]
	 */
	setmirrortoconsole(enable: 0 | 1): void;

	/**
	 * The word setpollthrottle, followed by an integer, sets the maximum number of events the scheduler executes each time it is called (The default value is 20). Setting this value lower may decrease accuracy of timing at the expense of efficiency.
	 * @param {number} event_count [description]
	 */
	setpollthrottle(event_count: number): void;

	/**
	 * The word setqueuethrottle, followed by an integer value, sets the maximum number of events handled at low-priority each time the low-priority queue handler is called (The default value is 2). Changing this value may affect the responsiveness of the user interface.
	 * @param {number} event_count [description]
	 */
	setqueuethrottle(event_count: number): void;

	/**
	 * The word setsleep, followed by a number, sets the time between calls to get the next system event, in 60ths of a second. The default value is 2.
	 * @param {number} interval [description]
	 */
	setsleep(interval: number): void;

	/**
	 * The word setslop, followed by a floating-point value, sets the scheduler slop value - the amount of time a scheduled event can be earlier than the current time before the time of the event is adjusted to match the current time. The default value is 25 milliseconds.
	 * @param {number} slop_value [description]
	 */
	setslop(slop_value: number): void;

	/**
	 * The word setsysqelemthrottle, followed by a number, sets the maximum number of patcher UI update events to process at a time. Lower values can lead to more processing power available to other low-priority Max processes, and higher values make the user interface more responsive (especially when using many bpatchers).
	 * @param {number} event_count [description]
	 */
	setsysqelemthrottle(event_count: number): void;

	/**
	 * Shows the cursor if it is hidden.
	 */
	showcursor(): void;

	/**
	 * Shows the menu bar after it has been hidden with hidemenubar.
	 */
	showmenubar(): void;

	/**
	 * Prints the number of symbols in the symbol table in the Max window.
	 */
	size(): void;

	/**
	 * The word system, followed by the name of an Operating System (windows or macintosh) and a message, will execute the message if Max is running on the named OS.
	 * @param {"windows" |       "macintosh"} os [description]
	 * @param {string}       message [description]
	 */
	system(os: "windows" | "macintosh", message: string): void;

	/**
	 * The word useslowbutcompletesearching, followed by a one (on) or zero (off), toggles complete file searching. When enabled, it causes files not found in Max's cache of the search path to be searched in the file system. This is necessary only in extremely rare cases where the file cache does not update properly. One such case is copying a file into the search path using a version of the Mac OS prior to 10.5.5 over a network. This option may cause patcher files to be loaded more slowly. The setting defaults to off with each launch of the application, and is not stored in the user's preferences. useslowbutcompletesearching 0 turns the setting off.
	 * @param {0 | 1} enable [description]
	 */
	useslowbutcompletesearching(enable: 0 | 1): void;
}


/**
 * A Maxobj is a Javascript representation of a Max object in a patcher. It is returned by various methods of a Javascript Patcher object, such as newobject().One important thing to keep in mind about a Maxobj is that it could eventually refer to an object that no longer exists if the underlying Max object is freed. The valid property can be used to test for this condition.
 * https://docs.cycling74.com/max7/vignettes/jsmaxobj
 */
declare class Maxobj {
	constructor();

	/**
	 * The location of an object in a patcher. When the object's rectangle is changed, it will move on screen if it is visible. The coordinates are stored in the following order: left, top, right, bottom.
	 * @type {number[]}
	 */
	rect: number[];

	/**
	 * The Max class (as opposed to the Javascript class, which is "Maxobj" and accessed via the standard class property) of the object.
	 * @type {string}
	 */
	maxclass: string;

	/**
	 * The Patcher object that contains the Maxobj
	 * @type {any}
	 */
	patcher: any;

	/**
	 * Is the object set to be hidden in a locked patcher
	 * @type {boolean}
	 */
	hidden: boolean;

	/**
	 * If the object is set to use one of the standard 16 colors, this property is the index of the color
	 * @type {number}
	 */
	colorindex: number;

	/**
	 * If there is another object after this one in the Patcher's list of objects, this property returns it, otherwise it returns a nil value
	 * @type {any}
	 */
	nextobject: any;

	/**
	 * The patcher-specific name of the object, as set with the Name... dialog
	 * @type {string}
	 */
	varname: string;

	/**
	 * Whether the object can be selected for text entry (a number box would be an example of an object whose canhilite property returns true)
	 * @type {boolean}
	 */
	canhilite: boolean;

	/**
	 * Whether the object is in the Patcher's background layer
	 * @type {boolean}
	 */
	background: boolean;

	/**
	 * Whether the object ignores clicks
	 * @type {boolean}
	 */
	ignoreclick: boolean;

	/**
	 * Whether the object is selected in an unlocked patcher window.
	 * @type {boolean}
	 */
	selected: boolean;

	/**
	 * If the Maxobj refers to an object is of Max class js, this returns the associated jsthis object
	 * TODO: Correct return type
	 * @type {any}
	 */
	js: any;

	/**
	 * Returns whether the Maxobj refers to a valid Max object
	 * @type {boolean}
	 */
	valid: boolean;

	/**
	 * Sends the object the message specified by the string, followed by any additional arguments provided. This is useful for sending messages to object which dynamically dispatch messages with the “anything” message, as is the case for instances of js, jsui, lcd, and others.
	 * @param {string} message     [description]
	 * @param {any[]}  ...anything [description]
	 */
	message(message: string, ...anything: any[]): void;

	/**
	 * Opens a help file describing the object, if it exists
	 */
	help(): void;

	/**
	 * If the object contains a patcher, this function returns a (Javascript) Patcher object. The optional index is used for specifying an instance number, which only applies to poly~ objects. If the object does not contain a subpatcher, a nil value is returned.
	 * @param  {number}  index [description]
	 * @return {Patcher}       [description]
	 */
	subpatcher(index: number): Patcher;

	/**
	 * Returns a Boolean value if the object has an entry in its message list for the message specified by the string. If the entry is not a message that can be sent by a user within Max (i.e., it's a C-level “untyped” message), false is returned. This doesn’t work for messages which are dynamically dispatched with the “anything” message, as is the case for instances of js, jsui, lcd, and others.
	 * @param  {string}  message [description]
	 * @return {boolean}         [description]
	 */
	understands(message: string): boolean;
 }


/**
 * The Patcher object is a Javascript representation of a Max patcher. You can find, create, modify, and iterate through objects within a patcher, send messages to a patcher that you would use with the thispatcher object, etc.
 * https://docs.cycling74.com/max7/vignettes/jspatcherobject
 */
declare class Patcher {
	/**
	 * Uses 100, 100, 400, 400 as default window coordinates
	 */
	constructor();
	
	/**
	 * left, top, bottom, right: global screen coordinates of the Patcher window
	 * @param {number} left   [description]
	 * @param {number} top    [description]
	 * @param {number} bottom [description]
	 * @param {number} right  [description]
	 */
	constructor(left: number, top: number, bottom: number, right: number);

	/**
	 * If the patcher is a subpatcher, the box property returns the Maxobj that contains it.
	 * @type {Maxobj}
	 */
	box: Maxobj;

	/**
	 * Number of objects in the patcher
	 * @type {number}
	 */
	count: number;

	/**
	 * The patcher’s file path on disk
	 * @type {string}
	 */
	filepath: string;

	/**
	 * If the patcher contains objects, this is the first one in its list. You can iterate through all objects in a patcher using the nextobject property of a Maxobj.
	 * @type {Maxobj}
	 */
	firstobject: Maxobj;

	/**
	 * The patcher's name (its window title, without any brackets that appear for subpatchers)
	 * @type {string}
	 */
	name: string;

	/**
	 * The patcher's locked state. This property is read-only in the runtime version of Max.
	 * @type {boolean}
	 */
	locked: boolean;

	/**
	 * Returns "patcher"
	 * @type {string}
	 */
	maxclass: string;

	/**
	 * Returns the Max class name of the parent object if this is a subpatcher, or a nil value if this is a top-level patcher.
	 * @type {string}
	 */
	parentclass: string;

	/**
	 * If the patcher is a subpatcher, this returns the parent patcher. Otherwise it returns a nil value.
	 * @type {Patcher}
	 */
	parentpatcher: Patcher;

	/**
	 * X/Y coordinate array for the scroll offset of a patcher is window
	 * @type {number[]}
	 */
	scrolloffset: number[];

	/**
	 * X/Y coordinate array for the patcher's fixed origin
	 * @type {number[]}
	 */
	scrollorigin: number[];

	/**
	 * A Javascript representation of the window associated with the patcher. For more information, see the Wind Object.
	 * @type {Wind}
	 */
	wind: Wind;

	/**
	 * Creates a new object of Max class classname in a patcher using the specified parameters and returns a Maxobj (see below) that represents it.
	 * @param  {string} classname [description]
	 * @param  {any[]}  ...params [description]
	 * @return {Maxobj}           [description]
	 */
	newobject(classname:string, ...params: any[]): Maxobj;

	/**
	 * Creates a new object of class classname in a patcher using the specified parameters and return a Maxobj (see below) that represents it.
	 * @param  {number} left      [description]
	 * @param  {number} top       [description]
	 * @param  {string} classname [description]
	 * @param  {any[]}  ...args   [description]
	 * @return {Maxobj}           [description]
	 */
	newdefault(left: number, top: number, classname:string, ...args: any[]): Maxobj;
	
	// TODO: Are from_object: any actually strings, or Maxobjs?

	/**
	 * Connects two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
	 * @param {any}    from_object [description]
	 * @param {number} outlet      [description]
	 * @param {any}    to_object   [description]
	 * @param {number} inlet       [description]
	 */
	connect(from_object: any, outlet: number, to_object: any, inlet: number): void;

	/**
	 * Connects two objects (of type Maxobj) in a patcher with a hidden patch cord. Arguments are the same as for the connect message above.
	 * @param {any}    from_object [description]
	 * @param {number} outlet      [description]
	 * @param {any}    to_object   [description]
	 * @param {number} inlet       [description]
	 */
	hiddenconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;

	/**
	 * Disconnects an existing connection between two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
	 * @param {any}    from_object [description]
	 * @param {number} outlet      [description]
	 * @param {any}    to_object   [description]
	 * @param {number} inlet       [description]
	 */
	disconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;

	/**
	 * For all objects in a patcher, calls the function with the each object's Maxobj as an argument. Does not recurse into subpatchers.
	 * @param {any} func [description]
	 */
	apply(func: any): void;

	/**
	 * For all objects in a patcher, calls the function with the each object's Maxobj as an argument.
	 * Same as apply() except that applydeep() recurses into subpatchers (depth first).
	 * @param {any} func [description]
	 */
	applydeep(func: any): void;

	/**
	 * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument. Does not recurse into subpatchers.
	 * @param {any} action_function [description]
	 * @param {any} test_function   [description]
	 */
	applyif(action_function: any, test_function: any): void;

	/**
	 * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument.
	 * Same as applyif() except that applydeepif() recurses into subpatchers
	 * @param {any} action_function [description]
	 * @param {any} test_function   [description]
	 */
	applydeepif(action_function: any, test_function: any): void;

	/**
	 * Removes the object (a Maxobj passed as an argument) from a patcher
	 * @param {any} obj [description]
	 */
	remove(obj: any): void;

	/**
	 * Returns the first object found in a patcher with the given name. The name is a local name as specified by the Name... dialog in a patcher, not the name of a send or receive object. You can also set an object's name using the varname property of a Maxobj.
	 * @param  {string} name [description]
	 * @return {Maxobj}      [description]
	 */
	getnamed(name: string): Maxobj;

	/**
	 * Calls the function on each object in a patcher, passing it as a Maxobj argument to the function. If the function returns true, the iteration stops and the Maxobj object is returned as the value of the getlogical() method. Otherwise getlogical() returns a nil value. Please note that access to patcher attributes in global code is not supported. This requires the use of loadbang().
	 * @param {any} func [description]
	 */
	getlogical(func: any): void;

	/**
	 * Moves the object to the front of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
	 * @param {any} obj [description]
	 */
	bringtofront(obj: any): void;

	/**
	 * Moves the object to the back of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
	 * @param {any} obj [description]
	 */
	sendtoback(obj: any): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PolyBuffer                                                                                                         // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jspolybuffer

/**
 * The PolyBuffer object in JS is a companion to the polybuffer~ object you create in a Max patcher. It provides the ability to access a group of buffer~ objects associated with a name.
 */
declare class PolyBuffer {

	/**
	 * If no name is provided as an argument then instantiation will fail.
	 * @param {string} name [description]
	 */
	constructor(name: string); 	

	name: string; 	
	count: number; 	
	size: number; 	
	open(): void; 	
	wclose(): void; 	
	readfolder(folder_path: string): void; 	
	writefolder(folder_path: string): void; 	
	append(soundfile_path: string): void; 	
	appendempty(duration: number, channels: number): void; 	
	clear(): void; 	
	print(): void; 	
	send(index: number, ...msg: any[]): void;

	/**
	 * Return an array containing index, name, path, duration, channel, and sample rate.
	 * @return {string[]} [description]
	 */
	dump(): string[]; 	
	
	/**
	 * Return an array containing names of the buffer~ objects and file names.
	 * @param  {string}   filename [description]
	 * @return {string[]}          [description]
	 */
	getshortname(filename: string): string[]; 	

	/**
	 * Return an array containing names of all the buffer~ objects.
	 * @param {string} filename [description]
	 */
	getbufferlist(filename: string): void;
 }


/**
 * A task is a function that can be scheduled or repeated. You can set the arguments to the function as well as the object that will be this when the function is called.
 * https://docs.cycling74.com/max7/vignettes/jstaskobject
 */
declare class Task {

	/**
	 * The object argument represents the this during the execution of the function. Use the this keyword (referring to the jsthis object) to be able to use outlets and other js object features. The function argument represents the function you want to execute, and arguments (an array) represents the arguments to pass to the function. The object and arguments arguments are optional. If not present, the parent of the function object (typically jsthis) will be assumed, and there will be no arguments supplied to the function.
	 * @param {any}   func    [description]
	 * @param {any}   obj     [description]
	 * @param {any[]} ...args [description]
	 */
	constructor(func: any, obj?: any, ...args: any[]);

	/**
	 * The arguments passed to the task function. arguments[0] is the first argument.
	 * @type {any[]}
	 */
	arguments: any[];

	/**
	 * The function that is executed in the Task. You can even change this within the task function itself.
	 * @type {any}
	 */
	function: any;

	/**
	 * Whether the Task is running or not. Within a function executing within a task, this will always be 1.
	 * @type {boolean}
	 */
	running: boolean;

	/**
	 * The time in milliseconds between repeats of the task function. The default interval is 500 ms.
	 * See documentation for an example.
	 * @type {number}
	 */
	interval: number;

	/**
	 * The object that is assigned to be the this in the task function. Most often this will be your jsthis object, so you can, for example access the outlet() method. You set up your jsthis object to be the this by creating a task with the keyword this as the first argument.
	 * See documentation for an example.
	 * @type {any}
	 */
	object: any;

	/**
	 * The number of times the task function has been called. Outside of a task function, the value of iterations is always 0. The value resets each time the task is started (using the repeat(), execute(), or schedule() methods.
	 * @type {number}
	 */
	iterations: number;

	/**
	 * Repeat a task function. The optional number argument specifies the number of repetitions. If the argument is not present or is negative, the task repeats until it is cancelled. The optional initialdelay argument sets the delay in milliseconds until the first iteration.
	 * See documentation for an example.
	 * @param {number} times [description]
	 */
	repeat(times: number): void;

	/**
	 * Run the task once, right now. Equivalent to calling the task function with its arguments.
	 */
	execute(): void;

	/**
	 * Run the task once, with a delay. The optional delay argument sets the time (in milliseconds) before the task function will be executed.
	 * @param {number} delay [description]
	 */
	schedule(delay?: number): void;

	/**
	 * If a task is scheduled or repeating, any future executions are cancelled. This method can be used within a task function for a self-canceling Task. 
	 * See documentation for an example.
	 */
	cancel(): void;
}


/**
 * The Wind object is a property of a Patcher that represents its window. You cannot create a new Wind or access other types of windows such as that of a Max table object.
 * https://docs.cycling74.com/max7/vignettes/jswindobj
 */
declare class Wind {

	/**
	 * The Patcher object associated with the window.
	 * @type {Patcher}
	 */
	assoc: Patcher;

	/**
	 * The Max class of the object associated with the window.
	 * @type {string}
	 */
	assocclass: string;

	/**
	 * Has the window’s contents been modified? This property is read-only in the runtime version of Max.
	 * @type {boolean}
	 */
	dirty: boolean;

	/**
	 * Does the window have a grow area?
	 * @type {boolean}
	 */
	hasgrow: boolean;

	/**
	 * Does the window have a horizontal scroll bar?
	 * @type {boolean}
	 */
	hashorizscroll: boolean;

	/**
	 * Does the window have a vertical scroll bar?
	 * @type {boolean}
	 */
	hasvertscroll: boolean;

	/**
	 * Does the window have a zoom box?
	 * @type {boolean}
	 */
	haszoom: boolean;

	/**
	 * Does the window have a window title bar?
	 * @type {boolean}
	 */
	hastitlebar: boolean;

	/**
	 * An array of four coordinates (left, top, right, bottom) representing the window’s location in global coordinates.
	 * @type {number[]}
	 */
	location: number[];

	/**
	 * The Wind object of the next patcher visible in the application’s list of windows The first Wind object can be accessed using the frontpatcher property of the Max object (as max.frontpatcher.wind).
	 * @type {Wind}
	 */
	next: Wind;

	/**
	 * An array of two coordinates (width, height) representing the window’s size.
	 * @type {number[]}
	 */
	size: number[];

	/**
	 * The window’s title.
	 * @type {string}
	 */
	title: string;

	/**
	 * Can you see the window?
	 * @type {boolean}
	 */
	visible: boolean;

	/**
	 * Move the window in front of all other windows.
	 */
	bringtofront(): void;

	/**
	 * Scroll the window so that x and y are at the top-left corner.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	scrollto(x: number, y: number): void;

	/**
	 * Moves the window behind all other windows.
	 */
	sendtoback(): void;

	/**
	 * Set the global location of the window according to the coordinates passed in as arguments.
	 * @param {number} left   [description]
	 * @param {number} top    [description]
	 * @param {number} bottom [description]
	 * @param {number} right  [description]
	 */
	setlocation(left: number, top: number, bottom: number, right: number): void;
 }


/**
 * The SQLite object provides access to the SQLite database system (see http://www.sqlite.org for more information). A companion object, SQLResult, is required for most database operations.
 * https://docs.cycling74.com/max7/vignettes/jssqliteobject
 */
declare class SQLite {

	/**
	 * No arguments are required for the instantiation of an SQLite object. However, all future calls to the database will be through this instance of the object.
	 */
	constructor();

	/**
	 * Open an SQLite-format file for database operations. The required filename argument is the file to access. The optional on_disk argument determines if the file should be memory-based (0) or disk-based (1). The optional must_exist argument, if non-zero, requires the file to exist to be opened. If zero, then a file will be created if it does not exist.
	 * This method returns an error code if unsuccessful, or a zero if the call results in an opened database.
	 * @param  {string} filename   [description]
	 * @param  {number} on_disk    [description]
	 * @param  {number} must_exist [description]
	 * @return {number}            [description]
	 */
	open(filename: string, on_disk: number, must_exist: number): number;

	/**
	 * Closes a previously opened SQLite database.
	 */
	close(): void;

	/**
	 * Perform an SQL command on the database. This command must be in standard SQL language syntax, limited to the operations that SQLite supports. The result argument will return with an SQLResult object with any applicable results.
	 * The method returns an error code if unsuccessful, or a zero if the call results in a completed operation.
	 * See documentation for an example.
	 * @param  {string} command [description]
	 * @param  {any}    result  [description]
	 * @return {number}         [description]
	 */
	exec(command: string, result: any): number;

	/**
	 * Start an SQL transaction on the database. This allows you to batch database updates, and to roll back sets of changes if they do not all complete. When you are done with batch updates, a call to endtransaction() should be executed.
	 */
	begintransaction(): void;

	/**
	 * Complete a transaction and flush all database writes to the file.
	 */
	endtransaction(): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SQLResult                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jssqlresultobject

/**
 * An SQLResult object is a container for results obtained in an SQLite.exec call. Not every exec() call will produce results, but any database query (SELECT in particular) will generate an SQLResult object even if the result is empty.
 * https://docs.cycling74.com/max7/vignettes/jssqlresultobject
 */
declare class SQLResult {
	constructor();

	/**
	 * Returns the number of records that were returned in the SQLResult object.
	 * @return {number} [description]
	 */
	numrecords(): number;

	/**
	 * Returns the number of fields in the dataset returned in the SQLResult object.
	 * @return {number} [description]
	 */
	numfields(): number;

	/**
	 * Returns the name of a column at the requested index.
	 * @param  {number} index [description]
	 * @return {string}       [description]
	 */
	fieldname(index: number): string;	

	/**
	 * Returns the value of the column identified by index, and in the record identified by record_no.
	 * See documentation for an example.
	 * @param  {number} index     [description]
	 * @param  {number} record_no [description]
	 * @return {any}              [description]
	 */
	value(index: number, record_no: number): any;				
}


/**
 * https://docs.cycling74.com/max7/vignettes/jsmgraphics
 */
declare class MGraphics {
	constructor();

	/**
	 * When autosketch is set to 1, the drawing commands will immediately be drawn without waiting a drawing execution command. While this is convenient, it is less flexible than working with autosketch set to 0.
	 * @type {number}
	 */
	autosketch: number;

	/**
	 * As described in the narrative above, the relative_coords setting determines whether the locations in the drawing area range from 0,0 through the size in pixels (relative_coords = 0), or if the drawing area ranges from (-aspect, 1.0) through (aspect, -1.0).
	 * @type {number}
	 */
	relative_coords: number;

	/**
	 * When autofill is set to 1, any shape command will immediately be filled without requiring a fill execution command. While this is convenient, it is less flexible than working with autofill set to 0.
	 * @type {number}
	 */
	autofill: number;

	/**
	 * The init routine is the first thing that an mgraphics-based Javascript program needs to call. It initializes the library, sets up the internal mgraphics variables and prepares the jsui object for drawing.
	 */
	init(): void;

	/**
	 * Force a redraw of the display area by calling the paint() function.
	 */
	redraw(): void;

	/**
	 * Returns a copy of the current path to be stored and reused at a later time.
	 */
	copy_path(): void;

	/**
	 * Appends a stored path to the current path at the current end point.
	 * @param {any} path [description]
	 */
	append_path(path: any): void;

	/**
	 * Create a line that connects the current path point to the origin of the path, thereby closing the path into a fill-able shape.
	 */
	close_path(): void;

	/**
	 * Using the current path, round the corners to the radius provided (or as close as possible given the path’s angle).
	 * @param {number} radius [description]
	 */
	path_roundcorners(radius: number): void;

	/**
	 * Returns an array with the current X and Y coordinates of the path ending position.
	 * @return {number[]} [description]
	 */
	get_current_point(): number[];

	/**
	 * Add a circular, clockwise, arc to the current path.
	 * @param {number} x_center The horizontal coordinate of the arc's center.
	 * @param {number} y_center The vertical coordinate of the arc's center.
	 * @param {number} radius   The radius of the arc.
	 * @param {number} angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param {number} angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	arc(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;

	/**
	 * Add a circular, counter-clockwise, arc to the current path.
	 * @param {number} x_center The horizontal coordinate of the arc's center.
	 * @param {number} y_center The vertical coordinate of the arc's center.
	 * @param {number} radius   The radius of the arc.
	 * @param {number} angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param {number} angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	arc_negative(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;

	/**
	 * Add a non-circular arc to the current path.
	 * @param {number} x_center The horizontal coordinate of the arc's center.
	 * @param {number} y_center The vertical coordinate of the arc's center.
	 * @param {number} radius_x The horizontal radius of the arc.
	 * @param {number} radius_y The vertical radius of the arc.
	 * @param {number} angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param {number} angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	ovalarc(x_center: number, y_center: number, radius_x: number, radius_y: number,	angle1: number, angle2: number): void;

	/**
	 * Add a cubic Bezier spline to the current path.
	 * @param {number} x1 The first control point.
	 * @param {number} y1 The first control point.
	 * @param {number} x2 The second control point.
	 * @param {number} y2 The second control point.
	 * @param {number} x3 The destination point.
	 * @param {number} y3 The destination point.
	 */
	curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

	/**
	 * Add a cubic Bezier spline to the current path, using coordinates relative to the current point.
	 * @param {number} x1 The first control point.
	 * @param {number} y1 The first control point.
	 * @param {number} x2 The second control point.
	 * @param {number} y2 The second control point.
	 * @param {number} x3 The destination point.
	 * @param {number} y3 The destination point.
	 */
	rel_curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

	/**
	 * Add a line segment to the current path.
	 * @param {number} x The destination point.
	 * @param {number} y The destination point.
	 */
	line_to(x: number, y: number): void;

	/**
	 * Add a line segment to the current path, using coordinates relative to the current point.
	 * @param {number} x The destination point.
	 * @param {number} y The destination point.
	 */
	rel_line_to(x: number, y: number): void;

	/**
	 * Move the cursor to a new point and begin a new subpath.
	 * @param {number} x The new location.
	 * @param {number} y The new location.
	 */
	move_to(x: number, y: number): void;

	/**
	 * Move the cursor to a new point and begin a new subpath, using coordinates relative to the current point.
	 * @param {number} x The new location.
	 * @param {number} y The new location.
	 */
	rel_move_to(x: number, y: number): void;

	/**
	 * Add a closed rectangle path in the context.
	 * @param {number} x      The horizontal origin.
	 * @param {number} y      The vertical origin.
	 * @param {number} width  The width of the rect.
	 * @param {number} height The height of the rect.
	 */
	rectangle(x: number, y: number, width: number, height: number): void;

	/**
	 * Add a closed rounded-rectangle path in the context.
	 * @param {number} x      The horizontal origin.
	 * @param {number} y      The vertical origin.
	 * @param {number} width  The width of the rect.
	 * @param {number} height The height of the rect.
	 * @param {number} ovalwidth  The width of the oval used for the round corners.
	 * @param {number} ovalheight The height of the oval used for the round corners.
	 */
	rectangle_rounded(x: number, y: number, width: number, height: number, ovalwidth: number, ovalheight: number): void;

	/**
	 * Add a closed elliptical path in the context.
	 * @param {number} x      The horizontal origin.
	 * @param {number} y      The vertical origin.
	 * @param {number} width  The width of the rect.
	 * @param {number} height The height of the rect.
	 */
	ellipse(x: number, y: number, width: number, height: number): void;

	/**
	 * Sets the current font face by name.
	 * @param {string} fontname [description]
	 */
	select_font_face(fontname: string): void;

	/**
	 * Sets the current font size, using either an integer or floating-point value.
	 * @param {number} size [description]
	 */
	set_font_size(size: number): void;

	/**
	 * Places the display text in the drawing area at the current location, and using the current font and size. Since a path is not being created, it does not conform to the transformations otherwise available with paths.
	 * @param {string} text [description]
	 */
	show_text(text: string): void;

	/**
	 * Create a path that uses the display text, the current font and the current size. The result is subject to all of the transforms ordinarily available to paths.
	 * @param {string} text [description]
	 */
	text_path(text: string): void;

	/**
	 * Returns an array with three values: ascent, descent and height.
	 * @return {number[]} [description]
	 */
	font_extents(): number[];

	/**
	 * Returns an array with two values: width and height. This is the measurement of the provided text using the current font and size.
	 * @return {number[]} [description]
	 */
	text_measure(): number[];

	/**
	 * Returns a Javascript array where each value is the text name of a font installed on your system. You can determine the length of the array by using the variable fontlist.length.
	 * @return {string[]} [description]
	 */
	getfontlist(): string[];

	/**
	 * Create a solid color pattern.
	 * @param  {number}  red   [description]
	 * @param  {number}  green [description]
	 * @param  {number}  blue  [description]
	 * @param  {number}  alpha [description]
	 * @return {Pattern}       [description]
	 */
	pattern_create_rgba(red: number, green: number, blue: number, alpha: number): Pattern;

	/**
	 * Create a pattern using an image for the background. Repeating patterns depends on the extend value set using the set_extend() function.
	 * @param  {Image}   image [description]
	 * @return {Pattern}       [description]
	 */
	pattern_create_for_surface(image: Image): Pattern;

	/**
	 * Create a linear gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative coordinates.
	 * @param  {number}  x1 [description]
	 * @param  {number}  y1 [description]
	 * @param  {number}  x2 [description]
	 * @param  {number}  y2 [description]
	 * @return {Pattern}    [description]
	 */
	pattern_create_linear(x1: number, y1: number, x2: number, y2: number): Pattern;

	/**
	 * Create a radial gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative coordinates.
	 * @param  {number}  x1   [description]
	 * @param  {number}  y1   [description]
	 * @param  {number}  rad1 [description]
	 * @param  {number}  x2   [description]
	 * @param  {number}  y2   [description]
	 * @param  {number}  rad2 [description]
	 * @return {Pattern}      [description]
	 */
	pattern_create_radial(x1: number, y1: number, rad1: number, x2: number, y2: number, rad2: number): Pattern;

	/**
	 * Modifies the transform matrix by moving it by absolute (positive or negative) delta amounts.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	translate(x: number, y: number): void;

	/**
	 * Modifies the transform matrix that scales all X and Y values by the values provided.
	 * Note: This affects everything from size to location, and also scales line widths.
	 * @param {number} scale_x [description]
	 * @param {number} scale_y [description]
	 */
	scale(scale_x: number, scale_y: number): void;

	/**
	 * Modifies the transform matrix by rotating it. The rotation values is in radians (2-pi for a complete rotation).
	 * @param {number} rad [description]
	 */
	rotate(rad: number): void;

	/**
	 * Directly modify the transform matrix (and therefore the user space) using six values. The xx and yy values provide scaling support, xy and yx provide rotational warping, and x0 and y0 provide location offset.
	 * @param {number} xx [description]
	 * @param {number} xy [description]
	 * @param {number} yx [description]
	 * @param {number} yy [description]
	 * @param {number} x0 [description]
	 * @param {number} y0 [description]
	 */
	transform(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

	/**
	 * Directly set the tranform matrix for the current drawing context.
	 * @param {number} xx [description]
	 * @param {number} xy [description]
	 * @param {number} yx [description]
	 * @param {number} yy [description]
	 * @param {number} x0 [description]
	 * @param {number} y0 [description]
	 */
	set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

	/**
	 * Retrieve the current transform matrix for the current drawing context.
	 * @return {number[]} [description]
	 */
	get_matrix(): number[];

	/**
	 * Revert the transform matrix to default (normal) values.
	 */
	identity_matrix(): void;

	/**
	 * Given a user location (such as from get_current_point()), returns the device location. This helps find one’s position even with transform matrices in place.
	 * @param  {number[]} pos [description]
	 * @return {number[]}     [description]
	 */
	user_to_device(pos: number[]): number[];

	/**
	 * Given a device position, returns the user space location. This will determine a location despite user space deformation (using matrix transforms).
	 * @param  {number[]} pos [description]
	 * @return {number[]}     [description]
	 */
	device_to_user(pos: number[]): number[];

	/**
	 * Save the current Mgraphics state for later restoration. This is particularly useful when doing multiple transformations or matrix manipulation of the user space.
	 */
	save(): void;

	/**
	 * Restore the Mgraphics system to a previously saved state.
	 */
	restore(): void;

	/**
	 * Define a starting point for a path execution group. This group can be used for creating an image from a set of path functions without actually drawing the results to the screen.
	 */
	push_group(): void;

	/**
	 * Complete a path execution group, returning the results as an Image object. This image can be used for later drawing of the group results.
	 * @return {Image} [description]
	 */
	pop_group(): Image;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param {number[]} rgba [description]
	 */
	set_source_rgba(rgba: number[]): void;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param {number[]} rgb   [description]
	 * @param {number}   alpha [description]
	 */
	set_source_rgba(rgb: number[], alpha: number): void;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	set_source_rgba(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param {number[]} rgb [description]
	 */
	set_source_rgb(rgb: number[]): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 */
	set_source_rgb(red: number, green: number, blue: number): void;

	/**
	 * Sets the pattern to be used for the next fill() call. The name parameter must be a previously created pattern.
	 * @param {Pattern} pattern [description]
	 */
	set_source(pattern: Pattern): void;

	/**
	 * Sets the provided surface as the source for drawing routines.
	 * TODO: Surface type?
	 * @param {any} surface [description]
	 */
	set_source_surface(surface: any): void;

	/**
	 * Create a transform for the color and alpha channels using scale amounts to determine a color multiplier (either positive or negative). Note: One of the set_source_* routines must be called to apply this transform to an actual color.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	scale_source_rgba(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 */
	scale_source_rgb(red: number, green: number, blue: number): void;

	/**
	 * Create a transform for the color and alpha channels by absolute delta amounts to determine a color offset (either positive or negative). Note: One of the set_source_* routines must be called to apply this transform to an actual color.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	translate_source_rgba(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Set the appearance of the end-point of a drawn line. The options are butt, round, or square.
	 * @param {"butt" | "round" | "square"} line_cap [description]
	 */
	set_line_cap(line_cap: "butt" | "round" | "square"): void;

	/**
	 * Retrieve the appearance attribute of the current line_cap setting. The returned value is the same as the values used by set_line_cap.
	 */
	get_line_cap(): "butt" | "round" | "square";

	/**
	 * Set the appearance of the connection point between lines. The options are miter, round, or bevel.
	 * @param {"miter" | "round" | "bevel"} line_join [description]
	 */
	set_line_join(line_join: "miter" | "round" | "bevel"): void;

	/**
	 * Retrieve the appearance attribute of the current line_join setting. The returned value is the same as the values used by set_line_join.
	 */
	get_line_join(): "miter" | "round" | "bevel";

	/**
	 * Set the width of path lines drawn using the stroke() function. The width value is dependent on the coordinate system in use.
	 * @param {number} width [description]
	 */
	set_line_width(width: number): void;

	/**
	 * Retrieve the current line width as a floating-point number.
	 * @return {number} [description]
	 */
	get_line_width(): number;

	/**
	 * Fill the path with the current source color. When the fill is completed, the path will be destroyed.
	 */
	fill(): void;

	/**
	 * Fill the path with the current source color, but do not destroy the path when the fill is completed.
	 */
	fill_preserve(): void;

	/**
	 * Fill the path with the current source color, but override the alpha value for a fill-specific transparency.
	 * @param {number} alpha [description]
	 */
	fill_with_alpha(alpha: number): void;

	/**
	 * A combination of the two previous routines, this fills the path with the source color, but overrides the alpha value. It does not destroy the path when the fill is complete.
	 * @param {number} alpha [description]
	 */
	fill_preserve_with_alpha(alpha: number): void;

	/**
	 *  @param {Image} myImage [description]
	 */
	image_surface_draw(myImage: Image): void;

	/**
	 * Place an image (typically stored as an Image object) into the current surface. The drawing is placed at the top-left of the drawing context, changeable using a transform matrix or translate function. You can also choose the section of the image to draw using four optional arguments that describe a rectangle taken from the image.
	 * @param {Image}  myImage       [description]
	 * @param {number} source_top    optional
	 * @param {number} source_left   optional
	 * @param {number} source_width  optional
	 * @param {number} source_height optional
	 */
	image_surface_draw(myImage: Image, source_top?: number, source_left?: number, source_width?: number, source_height?: number): void;

	/**
	 * Render an SVG file into the current user context.
	 * @param {string} filename [description]
	 */
	svg_render(filename: string): void;

	/**
	 * Given a fillable path, determine if a point is within the fill zone. Returns 0 (false) or 1 (true).
	 * @param  {any[]}  ...args [description]
	 * @return {number}         [description]
	 */
	in_fill(...args: any[]): number;

	/**
	 * Determine the enclosing rectangle for the current fill area. Returns an array that contains the top/left and bottom/right points of the fill area.
	 * @return {number[]} [description]
	 */
	fill_extent(): number[];

	/**
	 * Draw the outline of the path with the color and line size chosen. When the drawing is complete, the path is deleted.
	 */
	stroke(): void;

	/**
	 * Draw the outline of the path with the color and line size chosen, but do not destroy the path when completed. This is useful for situations where you need to both fill a path and draw its outline.
	 */
	stroke_preserve(): void;

	/**
	 * Draw the outline of the path with the color and line size chosen, but override the alpha value of the color with a new alpha channel value. This allows you to change transparency without resetting the color values.
	 * @param {number} alpha [description]
	 */
	stroke_with_alpha(alpha: number): void;

	/**
	 * A combination of the above two routines, this will draw the line, preserve the path, and override the alpha value in a single routine call.
	 * @param {number} alpha [description]
	 */
	stroke_preserve_with_alpha(alpha: number): void;
}


/**
 * No Constructor. Object created by different MGraphics functions.
 * http://max-javascript-reference.tim-schenk.de/symbols/Pattern.html
 */
declare class Pattern {
	/**
	 * A function called on a previously created pattern, the add_color_stop_rgba will define a color value for one of the influence points of the pattern.
	 * @param {number} index [description]
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	add_color_stop_rgba(index: number, red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Returns the extend value of the pattern.
	 * @return {string} [description]
	 */
	get_extend(): string;

	/**
	 * Returns the current transform matrix for the pattern
	 * @return {number[]} [description]
	 */
	get_matrix(): number[];

	/**
	 * Returns the type of pattern that was created.
	 * @return {string} [description]
	 */
	get_type(): string;

	/**
	 * Revert the user space transform matrix to its default (normal) orientation.
	 */
	identity_matrix(): void;

	/**
	 * Apply a rotation transform on the user space in which the pattern is displayed.
	 * @param {number} rotation [description]
	 */
	rotate(rotation: number): void;

	/**
	 * Scale the pattern by a factor in both X and Y coordinate spaces.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	scale(x: number, y: number): void;

	/**
	 * Determines how the pattern will be created when there is more space than available information.
	 * @param {string} extend_type [description]
	 */
	set_extend(extend_type: string): void;

	/**
	 * set_matrix(xx, xy, yx, yy, x0, y0)
	 * @param {number} xx [description]
	 * @param {number} xy [description]
	 * @param {number} yx [description]
	 * @param {number} yy [description]
	 * @param {number} x0 [description]
	 * @param {number} y0 [description]
	 */
	set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void; 

	/**
	 * Apply a translation transform (spatial offset) on the user space in which the pattern is displayed.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	translate(x: number, y: number): void;
}

/**
 * Sketch
 * Every instance of jsui has an instance of Sketch bound to the variable "sketch". This is often the only instance of Sketch you will need to use. However, if you want to do things like render sprites, have multiple layers of images, or use drawing commands to create alpha channels for images, then you can create additional instances to render in. By default, when any function in your jsui object has been called the context is already set for the instance of Sketch bound to the variable "sketch".
 * https://docs.cycling74.com/max7/vignettes/jssketchobject
 */
declare class Sketch {

	/**
	 * create a new instance of Sketch with default width and height
	 */
	constructor();

	/**
	 * create a new instance of sketch with specified width and height
	 * @param {number} width  [description]
	 * @param {number} height [description]
	 */
	constructor(width: number, height: number);	

	/**
	 * Moves the drawing position to the location specified by the sum of the current drawing position and the delta x, y, and z arguments.
	 * @param {number} delta_x [description]
	 * @param {number} delta_y [description]
	 * @param {number} delta_z [description]
	 */
	move(delta_x: number, delta_y: number, delta_z?: number): void;

	/**
	 * Moves the drawing position to the location specified by the x, y, and z arguments.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 * @param {number} z [description]
	 */
	moveto(x: number, y: number, z?: number): void;

	/**
	 * Draws a point at the location specified by the x, y, and z arguments. After this method has been called, the drawing position is updated to the location specified by the x, y, and z arguments.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 * @param {number} z [description]
	 */
	point(x: number, y: number, z?: number): void;

	/**
	 * Draws a line from the current drawing position to the location specified the sum of the current drawing position and the delta x, y, and z arguments. After this method has been called, the drawing position is updated to the location specified by the sum of the current drawing position and the delta x, y, and z arguments.
	 * @param {number} delta_x [description]
	 * @param {number} delta_y [description]
	 * @param {number} delta_z [description]
	 */
	line(delta_x: number, delta_y: number, delta_z?: number): void;

	/**
	 * Draws a line from the current drawing position to the location specified by the x, y, and z arguments. After this method has been called, the drawing position is updated to the location specified by the x, y, and z arguments.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 * @param {number} z [description]
	 */
	lineto(x: number, y: number, z?: number): void;
	
	/**
	 * Draws a line from the location specified by the x1, y1, and z1 arguments to the location specified by the x2, y2, and z2 arguments. After this method has been called, the drawing position is updated to the location specified by the x2, y2, and z2 arguments.
	 * @param {number} x1 [description]
	 * @param {number} y1 [description]
	 * @param {number} z1 [description]
	 * @param {number} x2 [description]
	 * @param {number} y2 [description]
	 * @param {number} z2 [description]
	 */
	linesegment(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	linesegment(x1: number, y1: number, x2: number, y2: number): void;

	/**
	 * Draws a filled triangle with three corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, and z3 arguments. After this method has been called, the drawing position is updated to the location specified by the x3, y3, and z3 arguments.
	 * @param {number} x1 [description]
	 * @param {number} y1 [description]
	 * @param {number} z1 [description]
	 * @param {number} x2 [description]
	 * @param {number} y2 [description]
	 * @param {number} z2 [description]
	 * @param {number} x3 [description]
	 * @param {number} y3 [description]
	 * @param {number} z3 [description]
	 */
	tri(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3:	number, y3: number, z3: number): void;
	tri(x1: number, y1: number, x2: number, y2: number, x3:	number, y3: number): void;

	/**
	 * Draws a framed triangle with three corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, and z3 arguments. After this method has been called, the drawing position is updated to the location specified by the x3, y3, and z3 arguments.
	 * @param {number} x1 [description]
	 * @param {number} y1 [description]
	 * @param {number} z1 [description]
	 * @param {number} x2 [description]
	 * @param {number} y2 [description]
	 * @param {number} z2 [description]
	 * @param {number} x3 [description]
	 * @param {number} y3 [description]
	 * @param {number} z3 [description]
	 */
	frametri(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;

	/**
	 * Draws a filled quadrilateral with four corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, and z4 arguments. After this method has been called, the drawing position is updated to the location specified by the x4, y4, and z4 arguments.
	 * @param {number} x1 [description]
	 * @param {number} y1 [description]
	 * @param {number} z1 [description]
	 * @param {number} x2 [description]
	 * @param {number} y2 [description]
	 * @param {number} z2 [description]
	 * @param {number} x3 [description]
	 * @param {number} y3 [description]
	 * @param {number} z3 [description]
	 * @param {number} x4 [description]
	 * @param {number} y4 [description]
	 * @param {number} z4 [description]
	 */
	quad(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;

	/**
	 * Draws a framed quadrilateral with four corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, and z4 arguments. After this method has been called, the drawing position is updated to the location specified by the x4, y4, and z4 arguments.
	 * @param {number} x1 [description]
	 * @param {number} y1 [description]
	 * @param {number} z1 [description]
	 * @param {number} x2 [description]
	 * @param {number} y2 [description]
	 * @param {number} z2 [description]
	 * @param {number} x3 [description]
	 * @param {number} y3 [description]
	 * @param {number} z3 [description]
	 * @param {number} x4 [description]
	 * @param {number} y4 [description]
	 * @param {number} z4 [description]
	 */
	framequad(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
	
	/**
	 * Draws a filled circle with radius specified by the radius argument. If theta_start and theta_end are specified, then an arc will be drawn instead of a full circle. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} radius      [description]
	 * @param {number} theta_start [description]
	 * @param {number} theta_end   [description]
	 */
	circle(radius: number, theta_start: number, theta_end: number): void;

	/**
	 * Draws a cube with width 2*scale_x, height 2*scale_y, depth 2*scale_z, and center point at the current drawing position. If the scale_y and scale_z arguments are not specified, they will assume the same value as scale_x. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} scale_x [description]
	 * @param {number} scale_y [description]
	 * @param {number} scale_z [description]
	 */
	cube(scale_x: number, scale_y: number, scale_z?: number): void;
	
	/**
	 * Draws a cylinder with top radius specified by the radius1 argument, bottom radius specified by the radius2 argument, length specified by the mag argument, and center point at the current drawing position. If the theta_start and theta_end arguments are specified, then a patch will be drawn instead of a full cylinder. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} radius1     [description]
	 * @param {number} radius2     [description]
	 * @param {number} mag         [description]
	 * @param {number} theta_start [description]
	 * @param {number} theta_end   [description]
	 */
	cylinder(radius1: number, radius2: number, mag: number, theta_start: number, theta_end: number): void;

	/**
	 * Draws a filled ellipse with radii specified by the radius1 and radius2 arguments. If theta_start and theta_end are specified, then an arc will be drawn instead of a full ellipse. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} radius1     [description]
	 * @param {number} radius2     [description]
	 * @param {number} theta_start [description]
	 * @param {number} theta_end   [description]
	 */
	ellipse(radius1: number, radius2: number, theta_start: number, theta_end: number): void;

	/**
	 * Draws a framed circle with radius specified by the radius argument. If theta_start and theta_end are specified, then an arc will be drawn instead of a full circle. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} radius      [description]
	 * @param {number} theta_start [description]
	 * @param {number} theta_end   [description]
	 */
	framecircle(radius: number, theta_start: number, theta_end: number): void;

	/**
	 * Draws a framed ellipse with radii specified by the radius1 and radius2 arguments. If theta_start and theta_end are specified, then an arc will be drawn instead of a full ellipse. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} radius1     [description]
	 * @param {number} radius2     [description]
	 * @param {number} theta_start [description]
	 * @param {number} theta_end   [description]
	 */
	frameellipse(radius1: number, radius2: number, theta_start: number, theta_end: number): void;

	/**
	 * Draws a plane with top width 2*scale_x1, left height 2*scale_y1, bottom width 2*scale_x2, right height 2*scale_y2, and center point at the current drawing position. If scale_y1 is not specified, it will assume the same value as scale_x1. If scale_x2 and scale_y2 are not specified, they will assume the same values as scale_x1 and scale_y1 respectively. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} scale_x1 [description]
	 * @param {number} scale_y1 [description]
	 * @param {number} scale_x2 [description]
	 * @param {number} scale_y2 [description]
	 */
	plane(scale_x1: number, scale_y1: number, scale_x2: number, scale_y2: number): void;

	/**
	 * Draws a rounded plane with width 2*scale_x, and height 2*scale_y and center point at the current drawing position. The size of the rounded portion of the plane is determined by the round_amount argument. If scale_y is not specified, it will assume the same value as scale_x. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} round_amount [description]
	 * @param {number} scale_x      [description]
	 * @param {number} scale_y      [description]
	 */
	roundedplane(round_amount: number, scale_x: number, scale_y: number): void;

	/**
	 * Draws a sphere with radius specified by the radius argument and center point at the current drawing position. If the theta1_start, theta1_end, theta2_start, and theta2_end arguments are specified, then a patch will be drawn instead of a full sphere. The theta1_start, theta1_end, theta2_start, and theta2_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} radius       [description]
	 * @param {number} theta1_start [description]
	 * @param {number} theta1_end   [description]
	 * @param {number} theta2_start [description]
	 * @param {number} theta2_end   [description]
	 */
	sphere(radius: number, theta1_start: number, theta1_end: number, theta2_start: number, theta2_end: number): void;

	/**
	 * Draws a torus with major radius specified by the radius1 argument, minor radius specified by the radius2 argument, and center point at the current drawing position. If theta1_start, theta1_end, theta2_start, and theta2_end are specified, then a patch will be drawn instead of a full torus. The theta1_start, theta1_end, theta2_start, and theta2_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param {number} radius1      [description]
	 * @param {number} radius2      [description]
	 * @param {number} theta1_start [description]
	 * @param {number} theta1_end   [description]
	 * @param {number} theta2_start [description]
	 * @param {number} theta2_end   [description]
	 */
	torus(radius1: number, radius2: number, theta1_start: number, theta1_end: number, theta2_start: number, theta2_end: number): void;

	/**
	 * Sets the rotation for drawing internal to any of the "shape" drawing methods to the rotation specified by the x_rot, y_rot, and rotation_x, rotation_y, and rotation_z arguments.
	 * See documentation for an example.
	 * @param {number} rotation_x [description]
	 * @param {number} rotation_y [description]
	 * @param {number} rotation_z [description]
	 */
	shapeorient(rotation_x: number, rotation_y: number, rotation_z?: number): void;

	/**
	 * Sets the number of slices to use when rendering any of the "shape" drawing methods. Increasing the slice_a and slice_b arguments will increase the quality at which the shape is rendered, while decreasing these values will improve performance.
	 * @param {number} slice_a [description]
	 * @param {number} slice_b [description]
	 */
	shapeslice(slice_a: number, slice_b: number): void;
	
	/**
	 * Sets the OpenGL drawing primitive to use within any of the "shape" drawing methods. Acceptable values for the draw_prim argument are the following strings: lines, line_loop, line_strip, points, polygon, quads, quad_grid, quad_strip, triangles, tri_grid, tri_fan, tri_strip.
	 * @param {string} draw_prim [description]
	 */
	shapeprim(draw_prim: string): void;
	
	/**
	 * Sets the current font to the fontname specified by the fontname argument.
	 * @param {string} fontname [description]
	 */
	font(fontname: string): void;

	/**
	 * Sets the fontsize to the size specified by the points argument. Note that this size is an absolute, rather than relative value.
	 * @param {number} points [description]
	 */
	fontsize(points: number): void;

	/**
	 * Returns an array containing the width and height of the given string in absolute screen coordinates, taking into account the current font and fontsize.
	 * @param  {string}   str [description]
	 * @return {number[]}     [description]
	 */
	gettextinfo(str: string): number[];

	/**
	 * Draws the text specified by the string argument at the current drawing position, taking into account the current font, fontsize, and text alignment. Text is strictly 2D, and does not take into account any world transformations. After calling the text method, if the x axis text alignment is set to "left", the current drawing position will be updated to reflect the world position associated with the end of the string. If the x axis text alignment is set to "right", the current drawing position will be updated to reflect the world position associated with the end of the string. If the x axis text alignment is set to "center", the current drawing position will remain unchanged.
	 * @param {string} str [description]
	 */
	text(str: string): void;

	/**
	 * Sets the alignment of text to be drawn with respect to the current drawing position. Acceptable values for the x axis alignment are: "left", "right", or "center". Acceptable values for the y axis alignment are: "bottom", "top", or "center". The default alignment is "left", "bottom".
	 * @param {string} align_x [description]
	 * @param {string} align_y [description]
	 */
	textalign(align_x: string, align_y: string): void;

	/**
	 * Copies pixels from the source object to the location specified by the destination_x and destination_y arguments. The initial x and y offset into the source and size of the rectangle copied can be speified by the source_x, source_y, width and height arguments. If these are not present an x and y offset of zero and width and height equal to the source image is assumed. No scaling of pixels is supported. The source object can either be an instance of Image, or Sketch. If blending is enabled in the destination sketch object, alpha blending will be performed and the current alpha color will also be applied globally. The copypixels method is much faster than obtaining the equivalent result using glbindtexture() to texture a plane, and is the recommended means of drawing images when scaling and rotation is not required.
	 * @param {string} source_object [description]
	 * @param {number} destination_x [description]
	 * @param {number} destination_y [description]
	 * @param {number} source_x      [description]
	 * @param {number} source_y      [description]
	 * @param {number} width         [description]
	 * @param {number} height        [description]
	 */
	copypixels(source_object: string, destination_x: number, destination_y: number, source_x: number, source_y: number, width: number, height: number): void;

	/**
	 * Returns the depth value associated with the currently rendered pixel at a given absolute screen coordinate.
	 * @param  {number} x [description]
	 * @param  {number} y [description]
	 * @return {number}   [description]
	 */
	depthatpixel(x: number, y: number): number;

	/**
	 * Frees the image data from the native c peer, which is not considered by the JavaScript garbage collector, and may consume lots of memory until the garbage collector decides to run based on JS allocated memory. Once called, the Sketch object is not available for any other use.
	 */
	freepeer(): void;
	
	/**
	 * Returns an array containing the pixel value at the specified location. This array is ordered RGBA, i.e. array element 0 is red, 1, green, 2, blue, 3 alpha. Color values are floating point numbers in the range 0.-1.
	 * @param  {number}   x [description]
	 * @param  {number}   y [description]
	 * @return {number[]}   [description]
	 */
	getpixel(x: number, y: number): number[];
	
	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param {number} x     [description]
	 * @param {number} y     [description]
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	setpixel(x: number, y: number, red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Returns an array containing the x, y, and z world coordinates associated with a given screen pixel using the same the depth from the camera as 0,0,0. Optionally a third depth arg may be specified, which may be useful for hit detection and other applications. The depth value is typically specified in the range 0.-1. where 0 is the near clipping plane, and 1. is the far clipping plane. The worldtoscreen method can be used to determine the depth value of a given world coordinate, and the depthatpixel method can be used to determine the depth value associated with the currently rendered pixel at a given absolute screen coordinate.
	 * @param  {number}   x [description]
	 * @param  {number}   y [description]
	 * @return {number[]}   [description]
	 */
	screentoworld(x: number, y: number): number[];
	
	/**
	 * Returns an array containing the x, y, and depth screen coordinates associated with a given world coordinate. The depth value is typically specified in the range 0.-1. where 0 is the near clipping plane, and 1. is the far clipping plane.
	 * @param  {number}   x [description]
	 * @param  {number}   y [description]
	 * @param  {number}   z [description]
	 * @return {number[]}   [description]
	 */
	worldtoscreen(x: number, y: number, z?: number): number[];

	/**
	 * Begin definition of a stroked path of the style specified by the stroke_style argument. Currently supported stroke styles are "basic2d" and "line".
	 * @param {"basic2d" | "line"} stroke_style [description]
	 */
	beginstroke(stroke_style: "basic2d" | "line"): void;

	/**
	 * End definition of a stroked path, and render the path.
	 */
	endstroke(): void;

	/**
	 * Set the current value of the parameter specified by the parameter_name argument to be the value specified by parameter_values argument(s). Some parameters are global for the extent of a stroked path definition, while others may vary on a point by point basis.
	 * @param {string} parameter_name [description]
	 * @param {any[]}  ...args        [description]
	 */
	strokeparam(parameter_name: string, ...args: any[]): void;

	/**
	 * Defines an anchor point at the location specified by the x, y, and z arguments. Some stroke styles such as "basic2d" will ignore the z coordinate.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 * @param {number} z [description]
	 */
	strokepoint(x: number, y: number, z?: number): void;

	/**
	 * The default2d method is a simple way to set the graphics state to default properties useful for 2D graphics. It is called everytime your object is resized if default2d() has been called more recently than default3d().
	 */
	default2d(): void;
	
	/**
	 * The default3d method is a simple way to set the graphics state to default properties useful for 3D graphics. It is called everytime the jsui object is resized if default3d() has been called more recently than default2d().
	 */
	default3d(): void;

	/**
	 * The orth3d method is a simple way to set the graphics state to default properties useful for 3D graphics, using an orthographic projection (i.e. object scale is not affected by distance from the camera). It is called every time the jsui object is resized if ortho3d() has been called more recently than default2d(), or default3d().
	 */
	ortho3d(): void;

	glbegin(draw_prim: any[]): void;
	glbindtexture(image_object: string): void;	
	glblendfunc(src_function: string, dst_function: string): void;
	glclear(): void;
	glclearcolor(red: number, green: number, blue: number, alpha: number): void;
	glcleardepth(depth: number): void;
	glclipplane(plane: number, coeff1: number, coeff2: number, coeff3: number, coeff4: number): void;
	glcolor(red: number, green: number, blue: number, alpha: number): void;
	glcolormask(red: number, green: number, blue: number, alpha: number): void;
	glcolormaterial(face: number, mode: any[]): void;
	glcullface(face: number): void;
	gldepthmask(on: number): void;	
	gldepthrange(near: number, far: number): void;	
	gldisable(capability: number): void;
	gldrawpixels(image: string): void;
	gledgeflag(on: number): void;
	glenable(capability: number): void;	
	glend(): void;
	glfinish(): void;
	glflush(): void;
	glfog(parameter_name: string, value: number): void;	
	glfrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): void;	
	glhint(target: string, mode: number): void;	
	gllight(light: string, parameter_name: string, value: number): void;	
	gllightmodel(parameter_name: string, value: number): void;
	gllinestipple(factor: any[], bit_pattern: any[]): void;
	gllinewidth(width: number): void;
	glloadidentity(): void;
	glloadmatrix(matrix_array: number[]): void;	
	gllogicop(opcode: any[]): void;
	glmaterial(): void;
	glmatrixmode(mode: string): void;
	glmultmatrix(matrix_array: any[]): void;
	glnormal(x: number, y: number, z?: number): void;
	glortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
	glpointsize(size: number): void;
	glpolygonmode(): void;
	glpolygonoffset(): void;
	glpopattrib(): void;
	glpopmatrix(): void;
	glpushattrib(): void;
	glpushmatrix(): void;
	glrect(x1: number, y1: number, x2: number, y2: number): void;
	glrotate(angle: number, x: number, y: number, z?: number): void;
	glscale(x_scale: number, y_scale: number, z_scale?: number): void;
	glscissor(x: number, y: number, width: number, height: number): void;
	glshademodel(mode: any[]): void;
	gltexcoord(s: number[], t: number[]): void;
	gltexenv(parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
	gltexgen(coord: number[], parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
	gltexparameter(parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
	gltranslate(delta_x: number,  delta_y: number,  delta_z?: number): void;
	glulookat(eye_x: number, eye_y: number, eye_z: number, center_x: number, center_y: number, center_z: number, up_x: number, up_y: number, up_z: number): void;
	glulookat(eye_x: number, eye_y: number, center_x: number, center_y: number, up_x: number, up_y: number): void;
	gluortho2d(left: number, right: number, bottom: number, top: number): void;
	gluperspective(fovy: number, aspect: number, near: number, far: number): void;
	glvertex(x: number, y: number, z?: number): void;
	glviewport(x: number, y: number, width: number, height: number): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Image                                                                                                              // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsimageobject

/**
 * Image
 * The Image object can be used to draw images in an instance of the Sketch. It is possible to load image files from disk, create images from instances of Sketch, or generate them manually. The Image object has several methods to assist in manipulating images once generated. Note that alphablending is on by default in sketch. Certain file formats which contain alpha channels such as PICT or TIFF may have their alpha channel set all off. File formats which do not contain an alpha channel such as JPEG, by default have an alpha channel of all on. If you are having trouble seeing an image when attempting to draw in an instance of Sketch, you may want to either turn off blending with gldisable("blend"), or set the alpha channel to be all on with clearchannel("alpha",1.).
 * https://docs.cycling74.com/max7/vignettes/jsimageobject
 */
declare class Image {
	// TODO: Not like this.

	/**
	 * create a new Image instance with default width and height
	 */
	constructor();

	/**
	 * create a new Image instance from a file from disk
	 * @param {string} filename [description]
	 */
	constructor(filename: string);

	/**
	 * create a new Image instance from another instance of Image
	 * @param {Image} image [description]
	 */
	constructor(image: Image);

	/**
	 * create a new Image instance from an instance of Sketch
	 * @param {Sketch} sketch [description]
	 */
	constructor(sketch: Sketch);

	/**
	 * reate a new Image instance with the specified witdth and height
	 * @param {number} width  [description]
	 * @param {number} height [description]
	 */
	constructor(width: number, height: number);

	/**
	 * Access or set the size of an image. size[0] is width size[1] is height.
	 * @type {number[]}
	 */
	size: number[];

	/**
	 * Adjusts all channel values in the image channel specified by the channel argument, by multiplying the channel value by the value specified by the scale argument and then adding the value specified by the bias argument. The resulting channel is clipped to the range 0.-1. Acceptable values for the channel argument are the strings: "red", "green", "blue", or "alpha".
	 * @param {"red" |     "green"       | "blue" | "alpha"} channel [description]
	 * @param {number}   scale [description]
	 * @param {number}   bias  [description]
	 */
	adjustchannel(channel: "red" | "green" | "blue" | "alpha", scale: number, bias:number): void;
	
	/**
	 * Generates an alpha channel based on the chromatic distance from the specified RGB target color. If no tolerance, fade or minkey arguments are specified they are assumed to be 0. If no maxkey argument is specified, it is assumed to be 1.
	 * @param {number} red       [description]
	 * @param {number} green     [description]
	 * @param {number} blue      [description]
	 * @param {number} tolerance [description]
	 * @param {number} fade      [description]
	 * @param {number} minkey    [description]
	 * @param {number} maxkey    [description]
	 */
	alphachroma(red: number, green: number, blue: number, tolerance: number, fade: number, minkey: number, maxkey?: number): void;

	/**
	 * Similar to the copychannel method, except supports a blend amount specified by the alpha argument. The source object can only be an instance of Image (not Sketch). If the source object is not the same size as the destination object, then rectangle composed of the minimum width and height of each, is the rectangle of values which will be blended. Acceptable values for the channel arguments are the strings: "red", "green", "blue", or "alpha".
	 * @param {any}      source_object [description]
	 * @param {number}   alpha         [description]
	 * @param {"red" | "green" | "blue" | "alpha"} source_channel      [description]
	 * @param {"red" |  "green" | "blue" | "alpha"} destination_channel [description]
	 */
	blendchannel(source_object: any, alpha: number, source_channel: "red" | "green" | "blue" | "alpha", destination_channel: "red" | "green" | "blue" | "alpha"): void;

	/**
	 * Similar to the copypixels method, except supports alpha blending, including a global alpha value specified by the alpha argument. This global alpha value is multiplied by the source object's alpha channel at each pixel. Instances of Sketch do not contain an alpha channel, which is assumed to be all on. The source object can either be an instance of Image, or Sketch.
	 * @param {any}    source_object [description]
	 * @param {number} alpha         [description]
	 * @param {number} dest_x        [description]
	 * @param {number} dest_y        [description]
	 * @param {number} rc_x          [description]
	 * @param {number} src_y         [description]
	 * @param {number} width         [description]
	 * @param {number} height        [description]
	 */
	blendpixels(source_object: any, alpha: number, dest_x: number, dest_y: number, rc_x: number, src_y: number, width: number, height: number): void;

	/**
	 * Sets all pixels in the image to be the value specified by the red, green, blue, and alpha arguments. If no arguments are specified, these values are assumed to be (0, 0, 0, 1) respectively.
	 */
	clear(): void;

	/**
	 * Sets all pixels in the image to be the value specified by the red, green, blue, and alpha arguments. If no arguments are specified, these values are assumed to be (0, 0, 0, 1) respectively.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	clear(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Sets all channel values in the image channel specified by the channel argument to be the value specified by the value argument. If no value argument is specified, it is assumed to be 0. Acceptable values for the channel argument are the strings: "red", "green", "blue", or "alpha".
	 * @param {"red" | "green" | "blue" | "alpha"} channel [description]
	 * @param {number} value   [description]
	 */
	clearchannel(channel: "red" | "green" | "blue" | "alpha", value: number): void;

	/**
	 * Copies the channel values from the source object's channel specified by the source_channel argument to the destination object's channel specified by the destination_channel argument. The source object can only be an instance of Image (not Sketch). If the source object is not the same size as the destination object, then rectangle composed of the minimum width and height of each, is the rectangle of values which will be copied. Acceptable values for the channel arguments are the strings: "red", "green", "blue", or "alpha".
	 * @param {string} source_object       [description]
	 * @param {"red" | "green" | "blue" | "alpha"} source_channel      [description]
	 * @param {"red" | "green" | "blue" | "alpha"} destination_channel [description]
	 */
	copychannel(source_object: string, source_channel: "red" | "green" | "blue" | "alpha", destination_channel: "red" | "green" | "blue" | "alpha"): void;

	/**
	 * Copies pixels from the source object to the location specified by the destination_x and destination_y arguments. The initial x and y offset into the source and size of the rectangle copied can be speified by the source_x, source_y, width and height arguments. If these are not present an x and y offset of zero and width and height equal to the source image is assumed. No scaling of pixels is supported. The source object can either be an instance of Image, or Sketch.
	 * @param {string} source_object [description]
	 * @param {number} dest_x        [description]
	 * @param {number} dest_y        [description]
	 * @param {number} src_x         [description]
	 * @param {number} src_y         [description]
	 * @param {number} width         [description]
	 * @param {number} height        [description]
	 */
	copypixels(source_object: string, dest_x: number,  dest_y: number, src_x: number, src_y: number, width: number, height: number): void;

	/**
	 * Flips the image horizontally and or vertically. Arguments can be 0 or 1, where 0 is no flip, and 1 is flip.
	 * @param {0 | 1} horizontal_flip [description]
	 * @param {0 | 1} vertical_flip   [description]
	 */
	flip(horizontal_flip: 0 | 1, vertical_flip: 0 | 1): void;

	/**
	 * Frees the image data from the native c peer, which is not considered by the JavaScript garbage collector, and may consume lots of memory until the garbage collector decides to run based on JS allocated memory. Once called, the Image object is not available for any other use.
	 */
	freepeer(): void;

	/**
	 * Copies the pixels from the jit.matrix object specified by matrixname to the image.
	 * @param {string} matrixname [description]
	 */
	fromnamedmatrix(matrixname: string): void;	

	/**
	 * Returns an array containing the pixel value at the specified location. This array is ordered RGBA, i.e. array element 0 is red, 1, green, 2, blue, 3 alpha. Color values are floating point numbers in the range 0.-1.
	 * @param  {number}   x [description]
	 * @param  {number}   y [description]
	 * @return {number[]}   [description]
	 */
	getpixel(x: number, y: number): number[];

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param {number} x     [description]
	 * @param {number} y     [description]
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	setpixel(x: number, y: number, red: number, green: number, blue: number, alpha?: number): void;	

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param {number}   x    [description]
	 * @param {number}   y    [description]
	 * @param {number[]} rgba [description]
	 */
	setpixel(x: number, y: number, rgba: number[]): void;	

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param {number}   x   [description]
	 * @param {number}   y   [description]
	 * @param {number[]} rgb [description]
	 * @param {number}   a   [description]
	 */
	setpixel(x: number, y: number, rgb: number[], a?: number): void;

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param {number[]} position [description]
	 * @param {number}   red      [description]
	 * @param {number}   green    [description]
	 * @param {number}   blue     [description]
	 * @param {number}   alpha    [description]
	 */
	setpixel(position: number[], red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param {number[]} position [description]
	 * @param {number[]} rgba     [description]
	 */
	setpixel(position: number[], rgba: number[]): void;	

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param {number[]} position [description]
	 * @param {number[]} rgb      [description]
	 * @param {number}   a        [description]
	 */
	setpixel(position: number[], rgb: number[], a?: number): void;

	/**
	 * Swaps the axes of the image so that width becomes height and vice versa. The effective result is that the image is rotated 90 degrees counter clockwise, and then flipped vertically.
	 */
	swapxy(): void;

	/**
	 * Copy the pixels from the image to the jit.matrix object specified by matrixname.
	 * @param {string} matrixname [description]
	 */
	tonamedmatrix(matrixname: string): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaxCanvas                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class MaxCanvas {
	// TODO: 
	// if (!jsui || !(jsui instanceof js)) {
	//      post("missing or wrong argument for MaxCanvas, call \"new MaxCanvas(this);\"\n");
	//      return;
	// }
	constructor(jsui: Object);
	getContext(type: "max-2d"): CanvasRenderingContext2D;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasRenderingContext2D                                                                                           // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasRenderingContext2D {
	constructor(maxCanvas: MaxCanvas);
	save(): void;
	restore(): void;
	scale(x: number, y: number): void;
	rotate(x: number): void;
	translate(x: number, y: number): void;
	transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
	setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
	createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
	createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
	createPattern(image: Image, repetition: "repeat" | "repeat-x" | "repeat-y" | "no-repeat"): CanvasPattern;
	clearRect(x: number, y: number, w: number, h: number): void;
	fillRect(x: number, y: number, w: number, h: number): void;
	strokeRect(x: number, y: number, w: number, h: number): void;
	beginPath(): void;
	closePath(): void;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
	rect(x: number, y: number, w: number, h: number): void;
	arc(x: number, y: number, r: number, startAngle: number, endAngle: number, anticlockwise: number): void;
	fill(): void;
	stroke(): void;
	isPointInPath(x: number, y: number): boolean;
	fillText(text: string, x: number, y: number, maxWidth: number): void;
	strokeText(text: string, x: number, y: number, maxWidth: number): void;
	measureText(text: string): number;
	drawImage(image: Image, dx: number, dy: number): void;
	drawImage(image: Image, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: Image, sx: number, sy: number, sw: number, sh: number,
    	dx: number, dy: number, dw: number, dh: number): void;
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    //getImageData(): ... not yet implemented in CanvasExtension.js
    putImageData(imagedata: ImageData, dx: number, dy: number, not_used_dirtyX: number, not_used_dirtyY: number,
    	not_used_dirtyWidth: number, not_used_dirtyHeight: number): void;
	redraw(): void;
	paint(): void;
	roundedRect(x: number, y: number, w: number, h: number, ow: number, oh: number): void;
	setTimeout(expression: Object, timeout: number): Task;
	clearInterval(task: Task): void;
	setSource(style: CanvasPattern | CanvasGradient | string): void;
	parseFontString(font: string): any[];
	getTextAlign(textString: string): number;
	getTextBaseline(): number;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasGradient                                                                                                     // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasGradient {
	constructor(patternObj: Pattern, radiHelper: any); 	// TODO: radiHelper: any ?
	addColorStop(offset: number, color: any): void;			// TODO: color: any ?
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasPattern                                                                                                      // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasPattern {
	constructor(pat: any, rep: any); // TODO: any?
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ImageData                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class ImageData {
	constructor(sketchimage: any); // TODO: any?
	set(index: number, value: number): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasPixelArray                                                                                                   // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasPixelArray {
	readonly length: number;
	array(index: number): number;
	array(index: number, value: number): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RGBAColor                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class RGBAColor {
	constructor(color: string, globalAlpha: number);
	readonly ok: boolean;
	r: number;
	g: number;
	b: number;
	a: number;
	toRGB(): string;
	toHex(): string;
}

declare function hslToRgba(h: number, s: number, l: number, a: number): number[];

/*
 * Documentation is property of Cycling '74 and published with permission.
 */



/**
 * JitterObject
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterObject.html
 */
declare class JitterObject extends Maxobj {
	/**
	 * Creates Jitter objects. (use JitterMatrix for jit.matrix) 
	 * @param {string} object_name [description]
	 * @param {any[]}  ...params   [description]
	 */
	constructor(object_name: string, ...params: any[]);

	/**
	 * Deletes the JitterObject
	 */
	freepeer(): void;

	/**
	 * [getregisteredname description]
	 * @return {string} [description]
	 */
	getregisteredname(): string;
}


/**
 * JitterMatrix
 * The jit.matrix object is a named matrix which may be used for data storage and retrieval, resampling, and matrix type and planecount conversion operations.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterMatrix.html
 */
declare class JitterMatrix extends JitterObject {
	constructor(...args: any[]);  	// TODO:
									// From JitterReposUtils.js:
									// var s = new JitterMatrix(2, "long", x, y);

	/**
	 * Matrix adaptation flag.
	 * @type {number}
	 */
	adapt: number;

	// TODO: Probably number[] for this and the following {any}.

	/**
	 * The dimensions of matrix data.
	 * @type {any}
	 */
	dim: any;

	/**
	 * The byte stride per dimension.
	 * @type {any}
	 */
	dimstride: any;

	/**
	 * The destination dimension end position.
	 * @type {any}
	 */
	dstdimend: any;

	/**
	 * The destination dimension start position.
	 * @type {any}
	 */
	dstdimstart: any;

	/**
	 * Matrix interpolation flag.
	 * @type {number}
	 */
	interp: number;

	/**
	 * The name of the matrix.
	 * @type {string}
	 */
	name: string;

	/**
	 * The number of planes in matrix data.
	 * @type {number}
	 */
	planecount: number;

	/**
	 * Maps input places to output planes.
	 * @type {any}
	 */
	planemap: any;

	/**
	 * Total byte size of matrix.
	 * @type {number}
	 */
	size: number;

	/**
	 * The source dimension end position.
	 * @type {any}
	 */
	srcdimend: any;

	/**
	 * The source dimension start position.
	 * @type {any}
	 */
	srcdimstart: any;

	/**
	 * The matrix data type.
	 * @type {string}
	 */
	type: string;

	/**
	 * Destdim use flag.
	 * @type {number}
	 */
	usedstdim: number;

	/**
	 * Srcdim use flag.
	 * @type {number}
	 */
	usesrcdim: number;

	/**
	 * Outputs the currently stored matrix.
	 */
	bang(): void;

	/**
	 * Sets all matrix values to zero.
	 */
	clear(): void;

	/**
	 * Export the current frame as an image file with the name specified by the first argument.
	 * @param {string} filename  [description]
	 * @param {string} file_type [description]
	 * @param {0   |         1}           use_dialog [description]
	 */
	exportimage(filename: string, file_type: string, use_dialog: 0 | 1): void;

	/**
	 * Exports a matrix as a QuickTime movie.
	 * @param {string} filename  [description]
	 * @param {number} FPS       [description]
	 * @param {string} codec     [description]
	 * @param {string} quality   [description]
	 * @param {number} timescale [description]
	 */
	exportmovie(filename: string, FPS: number, codec: string, quality: string, timescale: number): void;

	/**
	 * exprfill(plane, expression)
	 * @param {number} plane      [description]
	 * @param {string} expression [description]
	 */
	exprfill(plane: number, expression: string): void;

	/**
	 * The word fillplane, followed by an integer that specifies a plane number and a value, will fill the specified plane with the single value.
	 * @param {number} plane [description]
	 * @param {number} value [description]
	 */
	fillplane(plane: number, value: number): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data.
	 * @param {number[]} values [description]
	 */
	float(values: number[]): void;

	/**
	 * Sends the value(s) in the cell specified by position out the right outlet of the object as a list in the form cell cell-position0.
	 * @param {number[]} position [description]
	 */
	getcell(position: number[]): void;

	/**
	 * Imports a QuickTime movie into the matrix.
	 * @param {string} filename    [description]
	 * @param {number} time_offset [description]
	 */
	importmovie(filename: string, time_offset: number): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data.
	 * @param {number[]} values [description]
	 */
	int(values: number[]): void;

	/**
	 * Copies the texture specified by texture-name to the matrix.
	 * @param {string} texture_name [description]
	 */
	jit_gl_texture(texture_name: string): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data.
	 * @param {number[]} values [description]
	 */
	list(values: number[]): void;

	/**
	 * The word op, followed by the name of a jit.op object operator and a set of values, is equivalent to including a jit.op object with the specified operator set as an attribute and this jit.matrix object specified as the output matrix.
	 * @param {any[]} ...params [description]
	 */
	op(...params: any[]): void;

	/**
	 * Reads Jitter binary data files (.jxf) into a matrix set.
	 * @param {string} filename [description]
	 */
	read(filename: string): void;

	/**
	 * Sets all cells to the value specified by value(s).
	 * @param {number[]} values [description]
	 */
	setall(values: number[]): void;

	/**
	 * Sets the cell specified by position to the value specified by value.
	 * @param {number[]}  position     [description]
	 * @param {number}    plane        [description]
	 * @param {number}    plane_number [description]
	 * @param {number |            number[]}    val [description]
	 * @param {number[]}  values       [description]
	 */
	setcell(position: number[], plane: number, plane_number: number, val: number | number[], values: number[]): void;

	/**
	 * The word setcell1d, followed by a number specifying an x coordinate and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed.
	 * @param {number[]} ...params [description]
	 */
	setcell1d(...params: number[]): void;

	/**
	 * The word setcell2d, followed by a pair of numbers specifying x and y coordinates and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed.
	 * @param {number[]} ...params [description]
	 */
	setcell2d(...params: number[]): void;

	/**
	 * The word setcell3d, followed by three numbers specifying x, y, and z coordinates and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (3) is fixed.
	 * @param {number[]} ...params [description]
	 */
	setcell3d(...params: number[]): void;
	
	/**
	 * The word setplane1d, followed by a number specifying an x coordinate, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
	 * @param {number[]} ...params [description]
	 */
	setplane1d(...params: number[]): void;

	/**
	 * The word setplane2d, followed by a pair of numbers specifying x and y coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed, or use the "plane" token to specify which plane to set.
	 * @param {number[]} ...params [description]
	 */
	setplane2d(...params: number[]): void;

	/**
	 * The word setplane3d, followed by three numbers specifying x, y, and z coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
	 * @param {number[]} ...params [description]
	 */
	setplane3d(...params: number[]): void;

	/**
	 * Sets all cells to the value specified by value(s).
	 * @param {number[]} ...params [description]
	 */
	val(...params: number[]): void;

	/**
	 * Writes matrix set as a Jitter binary data file (.jxf).
	 * @param {string} filename [description]
	 */
	write(filename: string): void;
}


/**
 * JitterReposUtils
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterReposUtils.html
 */
declare class JitterReposUtils {
	static interpbits: number;

	static cartopolmatrix2dfloat32(impulse: JitterMatrix, xs: number, ys: number, issigned: boolean) : JitterMatrix;
	static genkernel2dfloat32(): JitterMatrix;
	static makemap_cartopol(x: number, y: number, xscale: number, yscale: number) : JitterMatrix;
	static makemap_multi(x: number, y: number, xscale: number, yscale: number) : JitterMatrix;
	static makemap_normal(x: number, y: number) : JitterMatrix;
	static makemap_pinch(x: number, y: number, kx: number, ky: number, xpinch: number, ypinch: number, xamp: number,
		yamp: number, power: number) : JitterMatrix;
	static pack2plane(uno: JitterMatrix, dos: JitterMatrix) : JitterMatrix;
	static pinch2dfloat32(impulse: JitterMatrix, xpinch: number, ypinch: number, xamp: number, yamp: number,
		power: number) : JitterMatrix;
	static rel2abs(rela: JitterMatrix) : JitterMatrix;
	static unpack2plane(cero: JitterMatrix, uno: JitterMatrix, dos: JitterMatrix) : void;
	static upsample1d(inmat: JitterMatrix, l: number) : JitterMatrix;
	static upsample2d(inmat: JitterMatrix, x: number, y: number) : JitterMatrix;
}


/**
 * JitterListener
 * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event. Our JitterListener object is set to listen to our jit.window object (mywindow). The getregisteredname() property of a JitterObject object returns the name by which that object can be accessed by the JitterListener (in the case of jit.window objects, this will be the same as name of the drawing context). Whenever our jit.window object generates an event, a function called thecallback() will be triggered in our JavaScript code. Now that we’ve instantiated a JitterListener, we can (in most cases) leave it alone and simply deal with the mechanics of the callback function it triggers in response to an event from the object it listens to. 
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterListener.html
 */
declare class JitterListener extends JitterObject {
	/**
	 * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event.
	 * @param {string} object_name [description]
	 * @param {Object} callback    [description]
	 */
	constructor(object_name: string, callback: Object);

	/**
	 * The callback function to handle the event
	 * @type {Object}
	 */
	function: Object;

	/**
	 * The object to listen to.
	 * @type {JitterObject}
	 */
	object: JitterObject;

	/**
	 * Unknown
	 * @type {string}
	 */
	subjectname: string;
} 	


/**
 * JitterGUIUtils
 * classes for managing 3D UI objects.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIUtils.html 
 */
declare class JitterGUIUtils { 	
	static trackers: JitterGUITracker[];
	static add_client(dest: any, newclient: any): any;
	static add_tracker(dest: any): any;
	static delete_bogus_clients(dest: any): any;
	static init(dest: any): any;
}


/**
 * JitterGUITracker
 * Data and interface are considered private. arbitrates between subclasses of JitterGUIElement on a given render destination.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUITracker.html
 */
declare class JitterGUITracker {
 	constructor(dest: any);
	add_client(newclient: any): any;
	delete_bogus_clients(): any;
	delete_duplicate_clients(newclient: any): any;
	make_listener(): any;
} 	


/**
 * JitterEvent
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterEvent.html
 */
declare class JitterEvent {
	/**
	 * depends on event type
	 * @type {any}
	 */
	args: any;

	/**
	 * Name of the event to be handled
	 * @type {string}
	 */
	eventname: string;

	/**
	 * The name of the object to listen to.
	 * @type {string}
	 */
	subjectname: string;
}


/**
 * JitterGUIElement
 * Subclass this to make a UI object.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIElement.html
 */
declare class JitterGUIElement {
	constructor(mobj: any);
	delete_me: any;
	destination: any;
	frontmost: any;
	highlight: any;
	intersect: any;
	jitterobj: JitterObject;
	localint: number[];	 	
	maxobj: Maxobj;
	stilldown: any;

	/**
	 * set true to get events even if we are behind another object
	 * @type {boolean}
	 */	
	unblockable: boolean;
	unique_index: any;
	val: number;
	was_frontmost: any;
	worldint: number[];	
	drawto(destination: any): void;
	free(): any;

	/**
	 * return the intersection of the unit quad in world space with the line defined by raystart and rayend.
	 * @param  {any} raystart [description]
	 * @param  {any} rayend   [description]
	 * @param  {any} p1       [description]
	 * @return {any}          [description]
	 */
	get_intersect(raystart: any, rayend: any, p1: any): any;
	handle_event(event: JitterEvent): any;

	/**
	 * set the drawing destination.
	 * @param  {any} destination [description]
	 * @return {any}             [description]
	 */
	init(destination: any): any;

	/**
	 * parse jitter-style js arguments.
	 * @param {any[]} ...args [description]
	 */
	set_attr_args(...args: any[]): void;

	/**
	 * adding the unique_index property allows one js instance to own multiple JitterGUIElements
	 * @param  {any} k [description]
	 * @return {any}   [description]
	 */
	set_unique_index(k: any): any;
	update(): any;
}


/**
 * Jitter3dUtils
 * http://max-javascript-reference.tim-schenk.de/symbols/Jitter3dUtilsInterface.html
 * Max folder/jsextensions/jitter/Jitter3DUtils.js
 */

declare class Jitter3DUtils {
	/**
	 * add quats
	 * @param {number[]} q1 [description]
	 * @param {number[]} q2 [description]
	 * @param {number[]} q3 [description]
	 */
	static add_quats(q1: number[], q2: number[], q3: number[]): void;

	/**
	 * convert angle/axis rotation to quaternion.
	 * @param {number[]} axis [description]
	 * @param {number[]} quat [description]
	 */
	static axis_to_quat(axis: number[], quat: number[]): void;

	/**
	 * build rotation matrix m for the quaternion q.
	 * @param {number[]} m [description]
	 * @param {number[]} q [description]
	 */
	static build_rotmatrix(m: number[], q: number[]): void;

	/**
	 * set p1 to the point on sphere closest to line segment.
	 * @param {number[]} line_a [description]
	 * @param {number[]} line_b [description]
	 * @param {number[]} center [description]
	 * @param {number}   r      [description]
	 * @param {number[]} p1     [description]
	 */
	static closest_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): void;

	/**
	 * return true if the ray defined by the line's two points intersects the quad.
	 * @param  {number[]} line_a [description]
	 * @param  {number[]} line_b [description]
	 * @param  {number[]} pos    [description]
	 * @param  {number[]} rot    [description]
	 * @param  {number[]} scale  [description]
	 * @param  {number[]} p1     [description]
	 * @param  {number[]} p2     [description]
	 * @return {boolean}         [description]
	 */
	static intersect_line_quad(line_a: number[], line_b: number[], pos: number[], rot: number[], scale: number[],
		p1: number[], p2: number[]): boolean;

	/**
	 * if the ray defined by the line's two points intersects the sphere, set p1 to the closest point of intersection.
	 * @param  {number[]} line_a [description]
	 * @param  {number[]} line_b [description]
	 * @param  {number[]} center [description]
	 * @param  {number}   r      [description]
	 * @param  {number[]} p1     [description]
	 * @return {boolean}         [description]
	 */
	static intersect_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): boolean;
	
	/**
	 * [normalize_quat description]
	 * @param {number[]} q [description]
	 */
	static normalize_quat(q: number[]): void;

	/**
	 * convert quaternion to angle/axis rotation.
	 * @param {number[]} quat [description]
	 * @param {number[]} axis [description]
	 */
	static quat_to_axis(quat: number[], axis: number[]): void;

	/**
	 * [transform_point description]
	 * @param {number[]} p_in [description]
	 * @param {number[]} m    [description]
	 */
	static transform_point(p_in: number[], m: number[]): void;

	/**
	 * add src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vadd(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * copy the three indicies from v1 to v2
	 * @param {number[]} v1 [description]
	 * @param {number[]} v2 [description]
	 */
	static vcopy(v1: number[], v2: number[]): void;

	/**
	 * create the cross product of v1 and v2?
	 * @param {number[]} v1    [description]
	 * @param {number[]} v2    [description]
	 * @param {number[]} cross [description]
	 */
	static vcross(v1: number[], v2: number[], cross: number[]): void;

	/**
	 * divide src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vdiv(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * [vdot description]
	 * @param  {number[]} v1 [description]
	 * @param  {number[]} v2 [description]
	 * @return {number}      [description]
	 */
	static vdot(v1: number[], v2: number[]): number;

	/**
	 * distance-squared function
	 * @param  {number[]} v [description]
	 * @return {number}     [description]
	 */
	static vlength(v: number[]): number; 	

	/**
	 * cheaper distance-squared function
	 * @param  {number[]} v [description]
	 * @return {number}     [description]
	 */
	static vlength2(v: number[]): number;

	/**
	 * multiply src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vmul(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * [vnormal description]
	 * @param {number[]} v [description]
	 */
	static vnormal(v: number[]): void;

	/**
	 * scale the vector
	 * @param {number[]} v   [description]
	 * @param {number}   div [description]
	 */
	static vscale(v: number[], div: number): void;

	/**
	 * set all three indicies of v to x, y, z
	 * @param {number[]} v [description]
	 * @param {number}   x [description]
	 * @param {number}   y [description]
	 * @param {number}   z [description]
	 */
	static vset(v: number[], x: number, y: number, z: number): void;

	/**
	 * subtract src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vsub(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * set all three indicies of v to 0.0
	 * @param {number[]} v [description]
	 */
	static vzero(v: number[]): void;

	/**
	 * convert rotation in Euler angles (xyz) to angle/axis rotation.
	 * @param {number[]} xyz  [description]
	 * @param {number[]} axis [description]
	 */
	static xyz_to_axis(xyz: number[], axis: number[]): void;
}
