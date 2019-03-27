// @ts-ignore: decorator
@unsafe
declare function _malloc(size: usize): usize;

// @ts-ignore: decorator
@unsafe
declare function _free(ptr: usize): void;

// @ts-ignore: decorator
@unsafe @global
function __mem_allocate(size: usize): usize {
  return _malloc(size);
}

// @ts-ignore: decorator
@unsafe @global
function __mem_free(ptr: usize): void {
  _free(ptr);
}
