require "rake"

task :server do
  system "thin -R server.ru start"
end


task :dist do
  puts "Creating distributable..."
  system "r.js -o baseUrl=js name=../vendor/almond include=main out=main-build.js wrap=true"
end
