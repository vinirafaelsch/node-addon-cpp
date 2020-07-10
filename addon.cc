#include <nan.h>
#include <math.h>

void euclideanModulo (const Nan::FunctionCallbackInfo<v8::Value>& info) {
  v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();

  if (info.Length() < 2 || info.Length() > 2) {
    Nan::ThrowTypeError("Esta função espera dois parâmetros de entrada.");
    return;
  }

  if (!info[0]->IsNumber() || !info[1]->IsNumber()) {
    Nan::ThrowTypeError("Somente números são permitidos como entrada.");
    return;
  }

  double arg0 = info[0]->NumberValue(context).FromJust();
  double arg1 = info[1]->NumberValue(context).FromJust();
  
  //return ((n % m) + m) % m;
  v8::Local<v8::Number> result = Nan::New(fmod((fmod(arg0, arg1) + arg1), arg1));

  info.GetReturnValue().Set(result);
}

void mapLinear (const Nan::FunctionCallbackInfo<v8::Value>& info) {
  v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();

  if (info.Length() < 5 || info.Length() > 5) {
    Nan::ThrowTypeError("Esta função espera cinco parâmetros de entrada.");
    return;
  }

  if (!info[0]->IsNumber() || !info[1]->IsNumber()) {
    Nan::ThrowTypeError("Somente números são permitidos como entrada.");
    return;
  }

  double arg0 = info[0]->NumberValue(context).FromJust();
  double arg1 = info[1]->NumberValue(context).FromJust();
  double arg2 = info[2]->NumberValue(context).FromJust();
  double arg3 = info[3]->NumberValue(context).FromJust();
  double arg4 = info[4]->NumberValue(context).FromJust();

  // b1 + (x - a1) * (b2 - b1) / (a2 - a1)
  v8::Local<v8::Number> result = Nan::New(arg3 + (arg0 - arg1) * (arg4 - arg3) / (arg2 - arg1));

  info.GetReturnValue().Set(result);
}

void InitAll(v8::Local<v8::Object> exports) {
  v8::Local<v8::Context> context = exports->CreationContext();

  exports->Set(context,
               Nan::New("euclideanModulo").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(euclideanModulo)
                   ->GetFunction(context)
                   .ToLocalChecked());

  exports->Set(context,
               Nan::New("mapLinear").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(mapLinear)
                   ->GetFunction(context)
                   .ToLocalChecked());
}

NODE_MODULE(addon, InitAll)
