//
//  Memories.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/27/24.
//

import SwiftUI

struct Memories: View {
    @State private var memories: [Memory] = []
    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
    
    var body: some View {
        NavigationView {
            VStack{
                Spacer().frame(height: 25)
                HStack{
                    Spacer()
                    Text("Memories")
                        .font(.largeTitle)
                    Spacer()
                    NavigationLink(destination: AddMemory()) {
                        Image(systemName: "plus")
                    }
                }
                .padding(.horizontal)
                List(memories) { memory in
                    NavigationLink(destination: MemoryDetail(memory: memory)) {
                        Text(memory.title)
                    }
                }
                .onAppear {
                    loadMemories()
                }

                .navigationTitle("")
                .navigationBarItems(leading:
                                        HStack {
                    NavigationLink{
                        Menu()
                    } label: {
                        Image("NavIcon")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 80, height: 80)
                            .padding(.leading, -10)
                    }
                    Spacer()
                    Text("RoamRave")
                        .foregroundColor(.black)
                        .bold(true)
                        .padding(.leading, 30)
                }
                )
                .toolbarColorScheme(.dark, for: .navigationBar)
                .toolbarBackground(skyBlue, for: .navigationBar)
                .toolbarBackground(.visible, for: .navigationBar)
            }
            .font(.custom("text", size: 30))
            .background(Color.white)
            
        }
        .navigationBarBackButtonHidden(true)
    }

    func loadMemories() {
        guard let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else {
            print("Error: Unable to access documents directory")
            return
        }

        let fileURL = documentsDirectory.appendingPathComponent("MemoriesData.json")

        do {
            let data = try Data(contentsOf: fileURL)
            memories = try JSONDecoder().decode([Memory].self, from: data)
        } catch {
            print("Error loading memories: \(error)")
        }
    }
}


//    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
//    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
//    
//    var body: some View {
//        NavigationView{
//            VStack{
//                Text("Memories")
//                    .font(.largeTitle)
//                List {
//                    ForEach(activities.filter { $0.isFavorite }) { activity in
//                        NavigationLink(destination: ActivityDetails(activity: activity)) {
//                            ActivitiesRow(activity: activity)
//                        }
//                    }
//                    .listRowBackground(babyPink)
//                    .listRowSeparatorTint(.black)
//                    .padding(3)
//                    .alignmentGuide(.listRowSeparatorLeading) { viewDimensions in
//                        return viewDimensions[.listRowSeparatorLeading] - 20
//                    }
//                }
//                .listStyle(PlainListStyle())
//                    .navigationTitle("")
//                    .navigationBarItems(leading:
//                                            HStack {
//                        NavigationLink{
//                            Menu()
//                        } label: {
//                            Image("NavIcon")
//                                .resizable()
//                                .scaledToFit()
//                                .frame(width: 80, height: 80)
//                                .padding(.leading, -10)
//                        }
//                        Spacer()
//                        Text("RoamRave")
//                            .foregroundColor(.black)
//                            .bold(true)
//                            .padding(.leading, 30)
//                    }
//                    )
//                    .toolbarColorScheme(.dark, for: .navigationBar)
//                    .toolbarBackground(skyBlue, for: .navigationBar)
//                    .toolbarBackground(.visible, for: .navigationBar)
//                
//            }
//            .font(.custom("text", size: 30))
//            .background(Color.white)
//        }
//        .navigationBarBackButtonHidden(true)
//        
//    }
//}

#Preview {
    Memories()
}
