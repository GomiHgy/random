/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

/**
 * Random
 */
//% weight=100 color=#d26bff icon=""
namespace Random {
    let _x: number = 123456789;
    let _y: number = 362436069;
    let _z: number = 521288629;
    let _w: number = 88675123;

    /**
     * 乱数のシード値を設定します
     * @param x シード値。設定されない場合は
     * @param y シード値
     * @param z シード値
     * @param w シード値
     */
    //% block
    export function setRandomSeed(x: number = 123456789, y: number = 362436069, z: number = 521288629, w: number = 88675123): void {
        _x = Math.constrain(Math.floor(x), 0, 4294967295);
        _y = Math.constrain(Math.floor(y), 0, 4294967295);
        _z = Math.constrain(Math.floor(z), 0, 4294967295);
        _w = Math.constrain(Math.floor(w), 0, 4294967295);
    }

    /**
     * 乱数を生成します。
     * 次の生成時に乱数は変化しません。
     */
    //% block
    export function generate(): uint32 {
        let t: number = _x ^ (_x << 11);
        return (_w ^ (_w >> 19)) ^ (t ^ (t >> 8));
    }

    /**
     * 乱数を生成します。
     * 次の生成時に乱数は変化します。
     */
    //% block
    export function next(): uint32 {
        let t: number = _x ^ (_x << 11);
        _x = _y;
        _y = _z;
        _z = _w;
        _w = (_w ^ (_w >> 19)) ^ (t ^ (t >> 8));
        return _w
    }
}
