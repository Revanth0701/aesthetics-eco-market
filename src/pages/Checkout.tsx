import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { Check, CreditCard, MapPin, ShoppingBag, Truck } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const SHIPPING_COST = 5.99;
const TAX_RATE = 0.08;

const Checkout = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);

  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [payment, setPayment] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [orderId, setOrderId] = useState("");

  const subtotal = cartTotal;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING_COST + tax;

  const steps = [
    { n: 1, label: "Shipping", icon: MapPin },
    { n: 2, label: "Payment", icon: CreditCard },
    { n: 3, label: "Review", icon: ShoppingBag },
    { n: 4, label: "Confirmation", icon: Check },
  ];

  const validateShipping = () => {
    const required = ["fullName", "email", "address", "city", "state", "zip"] as const;
    for (const k of required) {
      if (!shipping[k].trim()) {
        toast({ title: "Missing info", description: `Please enter your ${k}.`, variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const validatePayment = () => {
    if (paymentMethod === "cod") return true;
    if (paymentMethod === "upi") return true;
    const { cardNumber, cardName, expiry, cvv } = payment;
    if (!cardNumber || !cardName || !expiry || !cvv) {
      toast({ title: "Missing info", description: "Please complete card details.", variant: "destructive" });
      return false;
    }
    if (cardNumber.replace(/\s/g, "").length < 12) {
      toast({ title: "Invalid card", description: "Card number looks too short.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const placeOrder = () => {
    const id = "ECO-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    setStep(4);
    clearCart();
    toast({ title: "Order placed!", description: `Your order ${id} has been confirmed.` });
  };

  if (cartCount === 0 && step !== 4) {
    return (
      <Layout>
        <div className="eco-container py-20 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-eco-stone mb-4" />
          <h1 className="text-3xl font-serif mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add a product before checking out.</p>
          <Button className="bg-eco-green hover:bg-eco-green/90" onClick={() => navigate("/shop")}>
            Browse Shop
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="eco-container py-10">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">Checkout</h1>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-10 max-w-3xl">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const active = step === s.n;
            const done = step > s.n;
            return (
              <div key={s.n} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      done
                        ? "bg-eco-green border-eco-green text-white"
                        : active
                        ? "border-eco-green text-eco-green"
                        : "border-eco-stone/40 text-eco-stone"
                    }`}
                  >
                    {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </div>
                  <span className={`text-xs mt-2 ${active ? "text-eco-green font-medium" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-2 ${step > s.n ? "bg-eco-green" : "bg-eco-stone/30"}`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-eco-stone/20 p-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-medium flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-eco-green" /> Shipping Address
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Label>Full Name *</Label>
                    <Input value={shipping.fullName} onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })} />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input type="email" value={shipping.email} onChange={(e) => setShipping({ ...shipping, email: e.target.value })} />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input value={shipping.phone} onChange={(e) => setShipping({ ...shipping, phone: e.target.value })} />
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Street Address *</Label>
                    <Input value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} />
                  </div>
                  <div>
                    <Label>City *</Label>
                    <Input value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} />
                  </div>
                  <div>
                    <Label>State *</Label>
                    <Input value={shipping.state} onChange={(e) => setShipping({ ...shipping, state: e.target.value })} />
                  </div>
                  <div>
                    <Label>ZIP / Postal *</Label>
                    <Input value={shipping.zip} onChange={(e) => setShipping({ ...shipping, zip: e.target.value })} />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input value={shipping.country} onChange={(e) => setShipping({ ...shipping, country: e.target.value })} />
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => navigate("/shop")}>Back to Shop</Button>
                  <Button
                    className="bg-eco-green hover:bg-eco-green/90"
                    onClick={() => validateShipping() && setStep(2)}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-medium flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-eco-green" /> Payment Method
                </h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  {[
                    { v: "card", label: "Credit / Debit Card" },
                    { v: "upi", label: "UPI" },
                    { v: "cod", label: "Cash on Delivery" },
                  ].map((opt) => (
                    <label
                      key={opt.v}
                      className={`flex items-center gap-3 border rounded-md p-3 cursor-pointer ${
                        paymentMethod === opt.v ? "border-eco-green bg-eco-green/5" : "border-eco-stone/30"
                      }`}
                    >
                      <RadioGroupItem value={opt.v} />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label>Card Number</Label>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={payment.cardNumber}
                        onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Name on Card</Label>
                      <Input value={payment.cardName} onChange={(e) => setPayment({ ...payment, cardName: e.target.value })} />
                    </div>
                    <div>
                      <Label>Expiry (MM/YY)</Label>
                      <Input placeholder="12/27" value={payment.expiry} onChange={(e) => setPayment({ ...payment, expiry: e.target.value })} />
                    </div>
                    <div>
                      <Label>CVV</Label>
                      <Input type="password" maxLength={4} value={payment.cvv} onChange={(e) => setPayment({ ...payment, cvv: e.target.value })} />
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div>
                    <Label>UPI ID</Label>
                    <Input placeholder="yourname@bank" />
                  </div>
                )}

                {paymentMethod === "cod" && (
                  <p className="text-sm text-muted-foreground">Pay in cash when your order is delivered.</p>
                )}

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button
                    className="bg-eco-green hover:bg-eco-green/90"
                    onClick={() => validatePayment() && setStep(3)}
                  >
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-medium flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-eco-green" /> Review Your Order
                </h2>

                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2"><Truck className="h-4 w-4" /> Shipping to</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>{shipping.fullName}</p>
                    <p>{shipping.address}, {shipping.city}, {shipping.state} {shipping.zip}</p>
                    <p>{shipping.country}</p>
                    <p>{shipping.email} {shipping.phone && `· ${shipping.phone}`}</p>
                  </div>
                  <Button variant="link" className="px-0 text-eco-green" onClick={() => setStep(1)}>Edit</Button>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2"><CreditCard className="h-4 w-4" /> Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    {paymentMethod === "card" && `Card ending in ${payment.cardNumber.slice(-4)}`}
                    {paymentMethod === "upi" && "UPI"}
                    {paymentMethod === "cod" && "Cash on Delivery"}
                  </p>
                  <Button variant="link" className="px-0 text-eco-green" onClick={() => setStep(2)}>Edit</Button>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Items ({cartCount})</h3>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="flex gap-3">
                          <img src={item.images[0]} alt={item.name} className="w-12 h-12 rounded object-cover" />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                  <Button className="bg-eco-green hover:bg-eco-green/90" onClick={placeOrder}>
                    Place Order · ${total.toFixed(2)}
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-10">
                <div className="h-16 w-16 rounded-full bg-eco-green/10 mx-auto flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-eco-green" />
                </div>
                <h2 className="text-2xl font-serif mb-2">Thank you for your order!</h2>
                <p className="text-muted-foreground mb-2">Your order ID is</p>
                <p className="text-lg font-medium text-eco-green mb-6">{orderId}</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                  A confirmation email has been sent to {shipping.email || "you"}. Our artisans will begin
                  preparing your handcrafted items shortly.
                </p>
                <div className="flex justify-center gap-3">
                  <Button variant="outline" asChild><Link to="/">Back to Home</Link></Button>
                  <Button className="bg-eco-green hover:bg-eco-green/90" asChild><Link to="/shop">Continue Shopping</Link></Button>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          {step !== 4 && (
            <div className="bg-eco-sand/40 rounded-lg border border-eco-stone/20 p-6 h-fit">
              <h3 className="font-medium text-lg mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm max-h-64 overflow-auto mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-3" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>${SHIPPING_COST.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span className="text-eco-green">${total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
