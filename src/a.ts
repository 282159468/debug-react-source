const o = {
    foo: (): Promise<any> => {
      return Promise.resolve({ a: 1 });
    }
  };
  
  export interface ApiObject {
    [index: string]: () => Promise<any>;
  }
  
  const wrapper = (obj: ApiObject) => {
    type Keys = keyof ApiObject;
    const ret: {
      [p in Keys]: () => Promise<any>;
    } = {};
  
    Object.keys(obj).forEach(name => {
      const fn = obj[name];
      ret[name] = function(): ReturnType<typeof fn> {
        return fn();
      };
    });
    return ret;
  };
  
  const result = wrapper(o);
  const aa = result.foo();  // 推荐不出result包含foo函数
  aa.then(res=>{
      res.a // 推断不出o.foo返回的{a:1}
  })