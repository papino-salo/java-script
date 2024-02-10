function b() {
  let c = 1
  function g() {
    console.log(c)
    return c++
  }
  return g
}

let func = b()

func()
func()
func()

