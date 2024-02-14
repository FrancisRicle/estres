import { Request, Response } from "@types/express"
enum Method {
  POST,
  GET,
  PUT,
  DELETE
}
type RouterOptions = {
  base: string,
  mountDir: string
}
type Handler = (req: Request, res: Response) => void
class Route {
  base: string
  isDynamic: boolean
  childrens: Map<string, Route>
  constructor(base: string = "", isDynamic: boolean = false) {
    this.childrens = new Map()
    this.isDynamic = isDynamic
    this.base = base
  }
  handler(req: Request, res: Response): void { }
}
class Router {
  routes: {
    [Method]: Route
  }
  constructor() {
    this.routes = null
  private matchRoute(method: Method, path: string): Route {
  }
  method(methodName: string, path, handler: Handler) {
    const route = new Route(path,)
    this.routes[methodName] = route
  }
  static createRouter(opts: RouterOptions): Handler {
    let res = new Router()
    return (req, res) => {

    }
  }
}
