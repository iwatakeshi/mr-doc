"use strict";
class TokenStream {
    constructor(tokens) {
        this._stream = [];
        this._position = 0;
        this._stream = tokens;
    }
    current() { return this._stream[this._position]; }
    next() { return this._stream[this._position++]; }
    previous() { return this._stream[this._position--]; }
    peek(to) { return this._stream[this._position + to]; }
    reset(tokens) {
        this._position = 0;
        this._stream = tokens ? tokens : this._stream;
    }
    get stream() { return this._stream; }
    get position() { return this._position; }
    get ended() { return this._position === this._stream.length; }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5TdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2tlblN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFHRSxZQUFZLE1BQWU7UUFGbkIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQ3ZELE9BQU8sS0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELElBQUksS0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsUUFBUSxLQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxJQUFJLENBQUMsRUFBVSxJQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLEtBQUssQ0FBQyxNQUFnQjtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxNQUFNLEtBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDLElBQUksUUFBUSxLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNqRCxJQUFJLEtBQUssS0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDeEU7O0FBZkQsOEJBZUMifQ==