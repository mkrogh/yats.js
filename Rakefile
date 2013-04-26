require "rake"


task :server do
  system "thin -R server.ru start"
end


task :clean => "distribute:clean"

task :dist => "distribute:run"

namespace :distribute do

  task :run => [:compile_js]

  task :compile_js => [:dist_dir, :html_output] do
    require "uglifier"
    require "json"
  
    puts "Creating distributable..."
    js_sources = load_js() 

    compiled_js = Uglifier.new.compile(js_sources)

    write_file("dist/output.min.js", compiled_js)
    write_file("dist/output.js", js_sources)
  end
  
  task :clean do
    puts "Removing dist dir"
    FileUtils.rm_r "dist" if File.exists? "dist"
  end

  task :dist_dir do
    puts "Creating dist dir" 
    FileUtils.mkdir_p "dist" 
  end


  task :html_output do 
    puts "Generating html example page..."
    index_html = open("index.html").read.gsub(/src='js\/dev-include.js'/,"src='output.min.js'") 
    write_file("dist/index.html", index_html)
    FileUtils.cp_r "resources", "dist"
  end

  def load_js 
    conf = JSON.load(open("js/modules.json"))
    
    js_sources = ""
  
    conf["load"].each do |js|
      path = File.join(conf["basePath"], js+".js")
      js_sources += open(path).read
      js_sources += "\n;\n"
    end
   js_sources 
  end

  def write_file(file, output)
    open(file, "w") {|file| file.write(output)}
  end
end
