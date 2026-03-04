#include "guimonitor.h"
#include <QVBoxLayout>
#include <QStringList>
#include <QTime>
#include <QRandomGenerator>

GuiMonitor::GuiMonitor(QWidget *parent) : QWidget(parent), cycle(0), energy(100) {
    QVBoxLayout *layout = new QVBoxLayout(this);
    
    energyLevel = new QProgressBar(this);
    energyLevel->setRange(0, 100);
    energyLevel->setValue(energy);
    energyLevel->setFormat("Energy Level: %p%");
    
    thoughtLog = new QTextEdit(this);
    thoughtLog->setReadOnly(true);
    
    layout->addWidget(energyLevel);
    layout->addWidget(thoughtLog);

    heartbeat = new QTimer(this);
    connect(heartbeat, &QTimer::timeout, this, &GuiMonitor::updateVitals);
    heartbeat->start(2500);
}

void GuiMonitor::react() {
    thoughtLog->setTextColor(QColor(Qt::red));
    thoughtLog->append(QTime::currentTime().toString("hh:mm:ss") + " - Sudden external stimulus detected. Heart rate spiking.");
    thoughtLog->setTextColor(QColor(Qt::black));
    
    heartbeat->setInterval(800);
    energy -= 10;
    if (energy < 0) energy = 0;
    energyLevel->setValue(energy);
    
    QTimer::singleShot(6000, [this]() { 
        heartbeat->setInterval(2500);
        thoughtLog->append(QTime::currentTime().toString("hh:mm:ss") + " - Heart rate stabilizing. Returning to baseline.");
    });
}

void GuiMonitor::updateVitals() {
    QStringList states = {
        "Regulating internal temperature...",
        "Scanning environment for changes...",
        "Processing auditory input...",
        "Consolidating short-term memory...",
        "Maintaining balance...",
        "Experiencing a fleeting random thought..."
    };
    
    int index = QRandomGenerator::global()->bounded(states.size());
    thoughtLog->append(QTime::currentTime().toString("hh:mm:ss") + " - " + states.at(index));
    
    if (energy < 100 && heartbeat->interval() == 2500) {
        energy += 2;
        if (energy > 100) energy = 100;
        energyLevel->setValue(energy);
    }
    
    cycle++;
}
