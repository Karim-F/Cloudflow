import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Cloud, Zap, Shield, Users, Workflow, Maximize, Minimize } from 'lucide-react'


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div>
      
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-teal-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Cloud className="h-8 w-8 text-teal-500 absolute" />
              <Workflow className="h-8 w-8 text-emerald-500 absolute animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">CloudFlow</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-teal-500 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-teal-500 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-teal-500 transition-colors">Testimonials</a>
          </nav>
          <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300">
            Get Started
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500">
              Elevate Your Workflow
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Experience the future of workflow automation with CloudFlow's innovative cloud-based solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-teal-500 via-emerald-500 to-cyan-500 rounded-full opacity-20 blur-3xl -z-10"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
              Unleash Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Zap className="h-10 w-10 text-yellow-500" />, title: "Lightning Fast", description: "Experience unparalleled speed in workflow execution" },
                { icon: <Shield className="h-10 w-10 text-red-500" />, title: "Bank-Grade Security", description: "Your data is protected with state-of-the-art encryption" },
                { icon: <Users className="h-10 w-10 text-blue-500" />, title: "Team Collaboration", description: "Work seamlessly with your team in real-time" },
                { icon: <Cloud className="h-10 w-10 text-purple-500" />, title: "Cloud-Native", description: "Access your workflows from anywhere, anytime" },
                { icon: <Workflow className="h-10 w-10 text-green-500" />, title: "Easy Integration", description: "Connect with your favorite tools effortlessly" },
                { icon: <Maximize className="h-10 w-10 text-indigo-500" />, title: "Scalable Solution", description: "Grow your automation as your business expands" },
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gray-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-300 to-transparent rounded-full opacity-20 blur-3xl -z-10"></div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-white to-teal-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
              Choose Your Perfect Plan
            </h2>
            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="annual">Annual Billing</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "Starter", price: "$29", features: ["5 workflows", "1,000 tasks/month", "Email support"] },
                    { name: "Pro", price: "$99", features: ["Unlimited workflows", "10,000 tasks/month", "Priority support", "Advanced analytics"] },
                    { name: "Enterprise", price: "Custom", features: ["Unlimited everything", "24/7 phone support", "Dedicated account manager", "Custom integrations"] },
                  ].map((plan, index) => (
                    <Card key={index} className={`relative overflow-hidden ${index === 1 ? "border-teal-500 border-2" : ""}`}>
                      {index === 1 && (
                        <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-semibold transform rotate-45 translate-x-8 translate-y-4">
                          Popular
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-4xl font-bold mb-6">{plan.price}</p>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300">
                          Choose Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="annual">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "Starter", price: "$290", features: ["5 workflows", "1,000 tasks/month", "Email support"] },
                    { name: "Pro", price: "$990", features: ["Unlimited workflows", "10,000 tasks/month", "Priority support", "Advanced analytics"] },
                    { name: "Enterprise", price: "Custom", features: ["Unlimited everything", "24/7 phone support", "Dedicated account manager", "Custom integrations"] },
                  ].map((plan, index) => (
                    <Card key={index} className={`relative overflow-hidden ${index === 1 ? "border-teal-500 border-2" : ""}`}>
                      {index === 1 && (
                        <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-semibold transform rotate-45 translate-x-8 translate-y-4">
                          Popular
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-4xl font-bold mb-6">{plan.price}</p>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300">
                          Choose Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
              Voices of Success
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", role: "CEO, TechStart", content: "CloudFlow has revolutionized our workflow. We've seen a 40% increase in productivity since implementing it." },
                { name: "Michael Chen", role: "CTO, InnovateCorp", content: "The customizability of CloudFlow is unmatched. It adapts perfectly to our unique business processes." },
                { name: "Emily Rodriguez", role: "Operations Manager, GrowthLabs", content: "CloudFlow's customer support is exceptional. They're always there when we need them." },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white bg-opacity-50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <svg className="h-8 w-8 text-teal-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mb-4 italic text-gray-600">{testimonial.content}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-300 to-transparent rounded-full opacity-20 blur-3xl -z-10"></div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-500 to-emerald-500 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and experience the power of CloudFlow today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white text-gray-900 placeholder-gray-500"
              />
              <Button size="lg" className="bg-white text-teal-500 hover:bg-teal-50 transition-colors duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Cloud className="h-6 w-6 text-teal-400 absolute" />
                  <Workflow className="h-6 w-6 text-emerald-400 absolute animate-pulse" />
                </div>
                <span className="text-xl font-bold">CloudFlow</span>
              </div>
              <p className="text-gray-400">Elevate your workflow with our powerful cloud-based solution.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Use Cases</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CloudFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;